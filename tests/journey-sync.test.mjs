import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

class MemoryStorage {
  constructor() { this.values = new Map(); }
  getItem(key) { return this.values.has(key) ? this.values.get(key) : null; }
  setItem(key, value) { this.values.set(key, String(value)); }
  removeItem(key) { this.values.delete(key); }
  key(index) { return [...this.values.keys()][index] ?? null; }
  get length() { return this.values.size; }
}

async function loadStore() {
  globalThis.localStorage = new MemoryStorage();
  const source = await readFile(new URL('../store.js', import.meta.url), 'utf8');
  return import(`data:text/javascript;base64,${Buffer.from(source).toString('base64')}#${Date.now()}`);
}

function queryResultFor(table, filters) {
  if (table === 'journey_state' && filters.state_type === 'choice') {
    return {
      data: [{
        user_id: 'user-1',
        state_type: 'choice',
        item_id: 'lesson_1_choice_0',
        value: { selected: 2, checked: true },
        updated_at: '2026-09-05T04:00:00.000Z'
      }],
      error: null
    };
  }
  return { data: [], error: null };
}

function createClient(upserts = []) {
  return {
    from(table) {
      return {
        select() {
          const filters = {};
          const query = {
            eq(column, value) { filters[column] = value; return query; },
            maybeSingle() { return Promise.resolve({ data: null, error: null }); },
            then(resolve, reject) { return Promise.resolve(queryResultFor(table, filters)).then(resolve, reject); }
          };
          return query;
        },
        upsert(rows) { upserts.push({ table, rows }); return Promise.resolve({ data: null, error: null }); }
      };
    }
  };
}

test('loads a Journey choice saved by the same account on another device', async () => {
  const { Store, Sync } = await loadStore();
  Sync.configure(createClient(), 'user-1');

  await Sync.reconcileAll();

  assert.deepEqual(Store.get('jornada_choices', {}), {
    lesson_1_choice_0: { selected: 2, checked: true }
  });
});

test('sends a new Journey answer to the account storage', async () => {
  const { Store, Sync } = await loadStore();
  const upserts = [];
  Sync.configure(createClient(upserts), 'user-1');

  Store.set('jornada_tf', {
    lesson_1_tf_0: { selected: true, checked: true }
  });
  await new Promise((resolve) => setImmediate(resolve));

  assert.deepEqual(upserts, [{
    table: 'journey_state',
    rows: [{
      state_type: 'true_false',
      item_id: 'lesson_1_tf_0',
      value: { selected: true, checked: true },
      user_id: 'user-1',
      updated_at: upserts[0].rows[0].updated_at
    }]
  }]);
});
