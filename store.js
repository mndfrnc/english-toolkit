// Camada única de armazenamento do English Toolkit — arquitetura local-first.
//
// Store.get/set/remove permanecem 100% SÍNCRONOS e continuam lendo/escrevendo
// no localStorage imediatamente, exatamente como antes da Fase 2. Nenhum outro
// arquivo do app precisou virar async por causa do Supabase.
//
// Por cima disso, este arquivo adiciona uma camada de sincronização em segundo
// plano (objeto `Sync`): Store.set() continua gravando local na hora, e ADEMAIS
// dispara (sem aguardar, sem travar a UI) uma tentativa de enviar essa mudança
// ao Supabase, se e quando o usuário estiver logado. Ver SUPABASE_SETUP.md para
// o esquema de tabelas, as políticas RLS e o plano de reconciliação completo.
const NS = 'toolkit_';
const META_NS = 'toolkit_meta_';

// Coleções "dicionário de registros" (id -> valor) onde rastreamos um updated_at
// por registro, para poder reconciliar corretamente com o Supabase depois.
// `revisions` já guarda seu próprio updatedAt por registro (não duplicamos aqui).
const RECORD_COLLECTIONS = ['understood', 'my_explanations', 'interview_answers'];
// Preferências simples de valor único, tratadas como um registro "bundle" só.
const PREF_KEYS = ['theme', 'last_section', 'printables_selected'];

function nowIso() {
  return new Date().toISOString();
}
function readMeta(key) {
  try {
    const raw = localStorage.getItem(META_NS + key);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}
function writeMeta(key, meta) {
  try {
    localStorage.setItem(META_NS + key, JSON.stringify(meta));
  } catch (e) {}
}

// Compara o valor anterior e o novo de uma coleção id->valor e carimba updated_at
// (agora) só nos ids que realmente mudaram — preservando o timestamp dos que não mudaram.
function stampRecordCollection(key, newValue, oldValue) {
  if (!newValue || typeof newValue !== 'object') return;
  const meta = readMeta(key);
  Object.keys(newValue).forEach((id) => {
    const changed = !oldValue || JSON.stringify(oldValue[id]) !== JSON.stringify(newValue[id]);
    if (changed) meta[id] = nowIso();
  });
  writeMeta(key, meta);
}
function stampPreferences() {
  const meta = readMeta('preferences');
  meta.__bundle = nowIso();
  writeMeta('preferences', meta);
}
// topic_activity e streaks são dicionários aninhados (topicId/concept -> sub-objeto);
// carimbamos no nível de granularidade real das tabelas (activity_id / concept).
function stampTopicActivity(newValue, oldValue) {
  const meta = readMeta('topic_activity');
  Object.keys(newValue || {}).forEach((topicId) => {
    const nt = newValue[topicId] || { attempted: {}, correct: {} };
    const ot = (oldValue && oldValue[topicId]) || { attempted: {}, correct: {} };
    Object.keys(nt.attempted || {}).forEach((actId) => {
      const changed = ot.attempted[actId] !== nt.attempted[actId] || ot.correct[actId] !== nt.correct[actId];
      if (changed) meta[topicId + ':' + actId] = nowIso();
    });
  });
  writeMeta('topic_activity', meta);
}
function stampStreaks(newValue, oldValue) {
  const meta = readMeta('streaks');
  ['correct', 'wrong'].forEach((side) => {
    Object.keys((newValue && newValue[side]) || {}).forEach((concept) => {
      const before = oldValue && oldValue[side] ? oldValue[side][concept] : undefined;
      const after = newValue[side][concept];
      if (before !== after) meta[concept] = nowIso();
    });
  });
  writeMeta('streaks', meta);
}

export const Store = {
  get(key, fallback) {
    try {
      const raw = localStorage.getItem(NS + key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  },
  set(key, value) {
    let oldValue;
    try {
      oldValue = Store.get(key, undefined);
      localStorage.setItem(NS + key, JSON.stringify(value));
    } catch (e) {
      // localStorage indisponível (modo privado, quota etc.) — falha silenciosa,
      // a UI continua funcionando só sem persistência nesta sessão.
      return;
    }
    // Carimba updated_at por registro (síncrono, barato) para reconciliação futura.
    if (RECORD_COLLECTIONS.indexOf(key) !== -1) stampRecordCollection(key, value, oldValue);
    else if (key === 'topic_activity') stampTopicActivity(value, oldValue);
    else if (key === 'streaks') stampStreaks(value, oldValue);
    else if (PREF_KEYS.indexOf(key) !== -1) stampPreferences();
    // Dispara sincronização em segundo plano — não aguarda, nunca bloqueia a escrita local.
    Sync.pushKey(key, value);
  },
  remove(key) {
    try {
      localStorage.removeItem(NS + key);
    } catch (e) {}
  }
};

// ---------------- Camada de sincronização (Fase 2 — Supabase) ----------------
// Local-first: a UI nunca espera a rede. Store.set já gravou local de forma
// síncrona antes de chegar aqui; tudo daqui pra baixo é best-effort e assíncrono.
let _client = null;
let _userId = null;
let _reconciling = false;

// Mapeia cada chave local para sua tabela e para os conversores linha<->valor.
// idField: coluna que identifica o registro dentro da coleção (null = linha única).
const TABLE_MAP = {
  understood: { table: 'lesson_understood', idField: 'lesson_id', toRow: (id, v) => ({ lesson_id: id, understood: !!v }), fromRow: (r) => !!r.understood },
  my_explanations: { table: 'my_explanations', idField: 'lesson_id', toRow: (id, v) => ({ lesson_id: id, text: v || '' }), fromRow: (r) => r.text || '' },
  interview_answers: { table: 'interview_answers', idField: 'block_id', toRow: (id, v) => ({ block_id: Number(id), text: v || '' }), fromRow: (r) => r.text || '' },
  revisions: {
    table: 'revisions', idField: 'concept',
    toRow: (id, v) => ({ concept: id, given: v.given, correct_answer: v.correctAnswer, explanation: v.explanation, count: v.count }),
    fromRow: (r) => ({ concept: r.concept, given: r.given, correctAnswer: r.correct_answer, explanation: r.explanation, count: r.count, updatedAt: Date.parse(r.updated_at) }),
    // revisions já guarda seu próprio updatedAt (ms) por registro — não usamos a meta genérica.
    getLocalTimestamp: (v) => (v ? new Date(v.updatedAt).toISOString() : null)
  },
  topic_activity: {
    table: 'topic_activity', idField: 'compound', // topic_id + activity_id
    toRows: (value, meta) => {
      const rows = [];
      Object.keys(value || {}).forEach((topicId) => {
        const t = value[topicId] || { attempted: {}, correct: {} };
        Object.keys(t.attempted || {}).forEach((actId) => {
          rows.push({ topic_id: topicId, activity_id: actId, attempted: !!t.attempted[actId], correct: !!t.correct[actId], __metaKey: topicId + ':' + actId });
        });
      });
      return rows;
    }
  },
  streaks: {
    table: 'concept_streaks', idField: 'concept',
    toRows: (value) => {
      const rows = [];
      const concepts = new Set([...Object.keys((value && value.correct) || {}), ...Object.keys((value && value.wrong) || {})]);
      concepts.forEach((concept) => rows.push({ concept, correct_streak: (value.correct && value.correct[concept]) || 0, wrong_streak: (value.wrong && value.wrong[concept]) || 0, __metaKey: concept }));
      return rows;
    }
  }
};

export const Sync = {
  // Chamado após login bem-sucedido. Não bloqueia: a UI já está de pé com o
  // cache local; isto só conecta o cliente e dispara reconcile() em background.
  configure(client, userId) {
    _client = client;
    _userId = userId;
  },
  isActive() {
    return !!(_client && _userId);
  },
  teardown() {
    _client = null;
    _userId = null;
  },

  // Envio best-effort de UMA chave recém-escrita localmente. Silencioso em caso
  // de erro/offline — a próxima reconciliação (próximo login) resolve divergências.
  pushKey(key, value) {
    if (!Sync.isActive()) return;
    try {
      Sync._pushKeyAsync(key, value).catch(() => {});
    } catch (e) {}
  },
  async _pushKeyAsync(key, value) {
    if (PREF_KEYS.indexOf(key) !== -1) {
      const meta = readMeta('preferences');
      await _client.from('preferences').upsert({
        user_id: _userId,
        theme: Store.get('theme', 'light'),
        printables_selected: Store.get('printables_selected', ['f1', 'f2', 'f3', 'f4']),
        last_section: Store.get('last_section', null),
        updated_at: meta.__bundle || nowIso()
      });
      return;
    }
    if (key === 'revisions') {
      const rows = Object.keys(value || {}).map((concept) => ({
        ...TABLE_MAP.revisions.toRow(concept, value[concept]),
        user_id: _userId,
        updated_at: new Date(value[concept].updatedAt || Date.now()).toISOString()
      }));
      if (rows.length) await _client.from('revisions').upsert(rows);
      return;
    }
    const map = TABLE_MAP[key];
    if (!map) return;
    if (map.toRows) {
      const rows = map.toRows(value).map((r) => { const { __metaKey, ...rest } = r; return { ...rest, user_id: _userId, updated_at: nowIso() }; });
      if (rows.length) await _client.from(map.table).upsert(rows);
      return;
    }
    const meta = readMeta(key);
    const withUser = Object.keys(value || {}).map((id) => ({
      ...map.toRow(id, value[id]),
      user_id: _userId,
      updated_at: (meta && meta[id]) || nowIso()
    }));
    if (withUser.length) await _client.from(map.table).upsert(withUser);
  },

  // Reconciliação completa no login. Roda em segundo plano — chamar sem `await`
  // no chamador para não atrasar a primeira pintura da tela.
  async reconcileAll(contentModForDefaults) {
    if (!Sync.isActive() || _reconciling) return;
    _reconciling = true;
    try {
      await Sync._reconcileRecordCollection('understood', TABLE_MAP.understood);
      await Sync._reconcileRecordCollection('my_explanations', TABLE_MAP.my_explanations);
      await Sync._reconcileRecordCollection('interview_answers', TABLE_MAP.interview_answers);
      await Sync._reconcileRevisions();
      await Sync._reconcileTopicActivity();
      await Sync._reconcileStreaks();
      await Sync._reconcilePreferences();
    } catch (e) {
      // Offline ou erro do Supabase — o app segue funcionando 100% do cache local.
      console.warn('Sync.reconcileAll falhou (seguindo com cache local):', e);
    } finally {
      _reconciling = false;
    }
  },

  async _reconcileRecordCollection(key, map) {
    const local = Store.get(key, {});
    const localMeta = readMeta(key);
    const { data: remoteRows, error } = await _client.from(map.table).select('*').eq('user_id', _userId);
    if (error) throw error;
    const remoteById = {};
    (remoteRows || []).forEach((r) => { remoteById[r[map.idField]] = r; });
    const merged = { ...local };
    const mergedMeta = { ...localMeta };
    const toUpsert = [];
    const allIds = new Set([...Object.keys(local || {}), ...Object.keys(remoteById)]);
    allIds.forEach((id) => {
      const remote = remoteById[id];
      const hasLocal = Object.prototype.hasOwnProperty.call(local, id);
      const localTs = localMeta[id]; // undefined = sem timestamp confiável
      if (!remote) {
        // Nada no servidor para este id: só existe local -> sobe (regra explícita:
        // registro sem timestamp SÓ sobe quando o remoto está vazio/inexistente).
        if (hasLocal) toUpsert.push({ ...map.toRow(id, local[id]), user_id: _userId, updated_at: localTs || nowIso() });
        return;
      }
      if (!hasLocal) {
        merged[id] = map.fromRow(remote);
        mergedMeta[id] = remote.updated_at;
        return;
      }
      // Existe dos dois lados: sem timestamp local confiável, remoto NUNCA é sobrescrito.
      if (!localTs) {
        merged[id] = map.fromRow(remote);
        mergedMeta[id] = remote.updated_at;
        return;
      }
      // Ambos com timestamp: o mais recente vence.
      if (new Date(localTs) > new Date(remote.updated_at)) {
        toUpsert.push({ ...map.toRow(id, local[id]), user_id: _userId, updated_at: localTs });
      } else {
        merged[id] = map.fromRow(remote);
        mergedMeta[id] = remote.updated_at;
      }
    });
    if (toUpsert.length) await _client.from(map.table).upsert(toUpsert);
    writeLocalReconciled(key, merged, mergedMeta);
  },

  async _reconcileRevisions() {
    const map = TABLE_MAP.revisions;
    const local = Store.get('revisions', {});
    const { data: remoteRows, error } = await _client.from(map.table).select('*').eq('user_id', _userId);
    if (error) throw error;
    const remoteById = {};
    (remoteRows || []).forEach((r) => { remoteById[r.concept] = r; });
    const merged = { ...local };
    const toUpsert = [];
    const allIds = new Set([...Object.keys(local || {}), ...Object.keys(remoteById)]);
    allIds.forEach((concept) => {
      const remote = remoteById[concept];
      const localRec = local[concept];
      if (!remote) {
        if (localRec) toUpsert.push({ ...map.toRow(concept, localRec), user_id: _userId, updated_at: new Date(localRec.updatedAt || Date.now()).toISOString() });
        return;
      }
      if (!localRec) { merged[concept] = map.fromRow(remote); return; }
      // revisions sempre tem updatedAt próprio (Date.now() em ms) — comparação direta.
      if (localRec.updatedAt > Date.parse(remote.updated_at)) {
        toUpsert.push({ ...map.toRow(concept, localRec), user_id: _userId, updated_at: new Date(localRec.updatedAt).toISOString() });
      } else {
        merged[concept] = map.fromRow(remote);
      }
    });
    if (toUpsert.length) await _client.from(map.table).upsert(toUpsert);
    try { localStorage.setItem(NS + 'revisions', JSON.stringify(merged)); } catch (e) {}
  },

  async _reconcileTopicActivity() {
    const local = Store.get('topic_activity', {});
    const localMeta = readMeta('topic_activity');
    const { data: remoteRows, error } = await _client.from('topic_activity').select('*').eq('user_id', _userId);
    if (error) throw error;
    const remoteByKey = {};
    (remoteRows || []).forEach((r) => { remoteByKey[r.topic_id + ':' + r.activity_id] = r; });
    const merged = JSON.parse(JSON.stringify(local || {}));
    const mergedMeta = { ...localMeta };
    const toUpsert = [];
    const localKeys = new Set();
    Object.keys(local || {}).forEach((topicId) => Object.keys((local[topicId] || {}).attempted || {}).forEach((actId) => localKeys.add(topicId + ':' + actId)));
    const allKeys = new Set([...localKeys, ...Object.keys(remoteByKey)]);
    allKeys.forEach((compound) => {
      const [topicId, actId] = compound.split(':');
      const remote = remoteByKey[compound];
      const hasLocal = localKeys.has(compound);
      const localTs = localMeta[compound];
      const localVal = hasLocal ? { attempted: local[topicId].attempted[actId], correct: local[topicId].correct[actId] } : null;
      if (!remote) {
        if (hasLocal) toUpsert.push({ topic_id: topicId, activity_id: actId, attempted: localVal.attempted, correct: localVal.correct, user_id: _userId, updated_at: localTs || nowIso() });
        return;
      }
      if (!hasLocal || !localTs) {
        merged[topicId] = merged[topicId] || { attempted: {}, correct: {} };
        merged[topicId].attempted[actId] = remote.attempted;
        merged[topicId].correct[actId] = remote.correct;
        mergedMeta[compound] = remote.updated_at;
        return;
      }
      if (new Date(localTs) > new Date(remote.updated_at)) {
        toUpsert.push({ topic_id: topicId, activity_id: actId, attempted: localVal.attempted, correct: localVal.correct, user_id: _userId, updated_at: localTs });
      } else {
        merged[topicId] = merged[topicId] || { attempted: {}, correct: {} };
        merged[topicId].attempted[actId] = remote.attempted;
        merged[topicId].correct[actId] = remote.correct;
        mergedMeta[compound] = remote.updated_at;
      }
    });
    if (toUpsert.length) await _client.from('topic_activity').upsert(toUpsert);
    writeLocalReconciled('topic_activity', merged, mergedMeta);
  },

  async _reconcileStreaks() {
    const local = Store.get('streaks', { correct: {}, wrong: {} });
    const localMeta = readMeta('streaks');
    const { data: remoteRows, error } = await _client.from('concept_streaks').select('*').eq('user_id', _userId);
    if (error) throw error;
    const remoteByConcept = {};
    (remoteRows || []).forEach((r) => { remoteByConcept[r.concept] = r; });
    const merged = { correct: { ...local.correct }, wrong: { ...local.wrong } };
    const mergedMeta = { ...localMeta };
    const toUpsert = [];
    const allConcepts = new Set([...Object.keys(local.correct || {}), ...Object.keys(local.wrong || {}), ...Object.keys(remoteByConcept)]);
    allConcepts.forEach((concept) => {
      const remote = remoteByConcept[concept];
      const localTs = localMeta[concept];
      const hasLocal = concept in (local.correct || {}) || concept in (local.wrong || {});
      if (!remote) {
        if (hasLocal) toUpsert.push({ concept, correct_streak: local.correct[concept] || 0, wrong_streak: local.wrong[concept] || 0, user_id: _userId, updated_at: localTs || nowIso() });
        return;
      }
      if (!hasLocal || !localTs) {
        merged.correct[concept] = remote.correct_streak;
        merged.wrong[concept] = remote.wrong_streak;
        mergedMeta[concept] = remote.updated_at;
        return;
      }
      if (new Date(localTs) > new Date(remote.updated_at)) {
        toUpsert.push({ concept, correct_streak: local.correct[concept] || 0, wrong_streak: local.wrong[concept] || 0, user_id: _userId, updated_at: localTs });
      } else {
        merged.correct[concept] = remote.correct_streak;
        merged.wrong[concept] = remote.wrong_streak;
        mergedMeta[concept] = remote.updated_at;
      }
    });
    if (toUpsert.length) await _client.from('concept_streaks').upsert(toUpsert);
    writeLocalReconciled('streaks', merged, mergedMeta);
  },

  async _reconcilePreferences() {
    const localMeta = readMeta('preferences');
    const localTs = localMeta.__bundle;
    const { data, error } = await _client.from('preferences').select('*').eq('user_id', _userId).maybeSingle();
    if (error) throw error;
    if (!data) {
      // Sem preferências remotas ainda -> sobe as locais (com ou sem timestamp).
      await _client.from('preferences').upsert({
        user_id: _userId, theme: Store.get('theme', 'light'),
        printables_selected: Store.get('printables_selected', ['f1', 'f2', 'f3', 'f4']),
        last_section: Store.get('last_section', null), updated_at: localTs || nowIso()
      });
      return;
    }
    if (!localTs || new Date(data.updated_at) >= new Date(localTs)) {
      // Remoto existe e (não temos timestamp local confiável OU remoto é mais recente) -> puxa.
      try {
        localStorage.setItem(NS + 'theme', JSON.stringify(data.theme || 'light'));
        localStorage.setItem(NS + 'printables_selected', JSON.stringify(data.printables_selected || ['f1', 'f2', 'f3', 'f4']));
        localStorage.setItem(NS + 'last_section', JSON.stringify(data.last_section || null));
        const meta = readMeta('preferences'); meta.__bundle = data.updated_at; writeMeta('preferences', meta);
      } catch (e) {}
    } else {
      // Local é mais recente -> sobe.
      await _client.from('preferences').upsert({
        user_id: _userId, theme: Store.get('theme', 'light'),
        printables_selected: Store.get('printables_selected', ['f1', 'f2', 'f3', 'f4']),
        last_section: Store.get('last_section', null), updated_at: localTs
      });
    }
  }
};

// Grava um resultado de reconciliação diretamente no localStorage, com o
// updated_at REAL vindo do servidor (nunca "agora") — por isso não passa por
// Store.set, que sempre carimbaria a hora atual como se fosse uma escrita nova do usuário.
function writeLocalReconciled(key, value, meta) {
  try {
    localStorage.setItem(NS + key, JSON.stringify(value));
    writeMeta(key, meta);
  } catch (e) {}
}
