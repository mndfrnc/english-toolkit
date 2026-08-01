// Dados do English Toolkit — Amanda. Fonte: Conteudo_English_Toolkit_Amanda_v2.md (v2, com revisões A-I aplicadas).
// Nenhum texto aqui foi inventado; onde o .md marca [EDITÁVEL], o campo correspondente fica em branco para a aluna preencher.

export const PALETTE = {
  light: { bg:'#FBF9F2', card:'#FFFFFF', ink:'#2A211F', inkSoft:'#5C5250', line:'#E7DFD3',
    vinho:'#912124', periwinkle:'#89A0E2', berry:'#CE7685', pink:'#F38EAA', cloud:'#B9D0E2', skyblue:'#A6D2DB' },
  dark: { bg:'#1C1815', card:'#26201C', ink:'#F3ECE6', inkSoft:'#C9BDB5', line:'#3A322C',
    vinho:'#E28587', periwinkle:'#9FB4EE', berry:'#E3A2B0', pink:'#F6B0C2', cloud:'#B9D0E2', skyblue:'#A6D2DB' }
};

// Os 8 tópicos-base usados para progresso (Home + em qualquer outro módulo que faça referência).
export const TOPICS = [
  { id:'greetings', label:'Cumprimentos e apresentação pessoal' },
  { id:'tobe', label:'Verbo To Be' },
  { id:'personalinfo', label:'Dados pessoais' },
  { id:'smalltalk', label:'Small talk e perguntas abertas' },
  { id:'likes', label:'Like/love/hate + gerúndio' },
  { id:'dodoesdid', label:'Auxiliares Do/Does/Did' },
  { id:'whwords', label:'WH-words' },
  { id:'interview', label:'Inglês para entrevistas' }
];

// ---------- Dúvidas que travaram a Amanda (Dúvidas 1–8, do/does/did) ----------
export const MICROLESSONS = [
{ id:'d1', topic:'dodoesdid', title:'Por que existem dois "do" em "What do you do?"',
  question:'Por que aparece "do" duas vezes na mesma frase?',
  shortAnswer:'O primeiro do só organiza a pergunta; o segundo do é o verbo de verdade, significa "fazer/atuar como".',
  logicPt:'Cada do tem um trabalho diferente — um é "moldura", o outro é "conteúdo".',
  technical:'O primeiro do é auxiliar do Present Simple; o segundo é o verbo lexical principal da frase.',
  metaphor:'O primeiro do é o crachá de "isso é uma pergunta"; o segundo é a pessoa que o crachá está identificando.',
  broken:[['What','informação'],['do','auxiliar'],['you','sujeito'],['do','verbo principal'],['in Recife','complemento']],
  ptComparison:'Em português, "O que você faz?" só tem um "faz" — por isso o segundo do em inglês soa redundante à primeira vista, mas não é.',
  commonError:'"What you do?" (falta o auxiliar) ou traduzir os dois do como se fossem a mesma coisa.',
  transform:{ afirmativa:'You do many things in Recife.', negativa:"You don't do much in Recife.", pergunta:'What do you do in Recife?', resposta:'I work with marketing.' },
  mini:{ prompt:'Identifique a função de cada palavra: "What do you like about your job?"', answer:'What = informação · do = auxiliar · you = sujeito · like = verbo principal · about your job = complemento' },
  extra:{ prompt:'Mesmo padrão: "Where do you work?"', answer:'Where = informação · do = auxiliar · you = sujeito · work = verbo principal' },
  listening:{ file:'audio/do_listening_01.mp3', transcript:'What do you do in Recife?', q:'Qual dos dois "do" é o auxiliar — o primeiro ou o segundo?', a:'O primeiro.' } },

{ id:'d2', topic:'dodoesdid', title:'O "do" auxiliar funciona como um ponto de interrogação dentro da frase?',
  question:'Esse "do" é tipo um sinal de pergunta escondido no meio da frase?',
  shortAnswer:'Sim, como primeira metáfora — mas ele também aparece na negativa, não só na pergunta.',
  logicPt:'Pensar nele como "isso aqui vai virar pergunta/negativa" ajuda a começar, mas a regra completa é maior.',
  technical:'Tecnicamente, do/does é o auxiliar que carrega a marcação de tempo/pessoa quando o verbo principal "não pode" carregar sozinho (em perguntas e negativas).',
  metaphor:'"Ponto de interrogação dentro da frase" — metáfora limitada, mas útil no início.',
  broken:[['Do','auxiliar'],['you','sujeito'],['like','verbo'],['pizza','complemento']],
  ptComparison:'Português não tem esse "carregador" — só muda a entonação da voz.',
  commonError:'Achar que do SÓ aparece em perguntas (esquecendo a negativa: "You don\'t like pizza.").',
  transform:{ afirmativa:'You like pizza.', negativa:"You don't like pizza.", pergunta:'Do you like pizza?', resposta:'Yes, I do.' },
  mini:{ prompt:'A frase é pergunta, negativa ou afirmativa? "She doesn\'t work here."', answer:'Negativa.' },
  extra:{ prompt:'Repita com outro verbo: "They don\'t travel much."', answer:'Também é negativa — mesmo padrão.' },
  listening:null },

{ id:'d3', topic:'dodoesdid', title:'Se "what" já indica uma pergunta, por que ainda precisamos do auxiliar?',
  question:'Já tem "what", por que ainda precisa de "do"?',
  shortAnswer:'What só diz qual informação está faltando; ele não organiza a estrutura da frase sozinho — quem faz isso é o auxiliar.',
  logicPt:'São dois trabalhos separados: um escolhe a "categoria" da resposta, o outro monta a ordem da frase.',
  technical:'WH-words se combinam com a estrutura de pergunta já existente (auxiliar + sujeito + verbo); elas não a substituem.',
  metaphor:'What é a etiqueta da caixa; do é a fita que fecha a caixa — precisa das duas.',
  broken:[['Where','informação'],['do','auxiliar'],['you','sujeito'],['live','verbo']],
  ptComparison:'Em português, "onde" sozinho já muda a ordem — mas o inglês exige o auxiliar de qualquer forma.',
  commonError:'"What you want?" (usar a WH-word como se ela bastasse sozinha).',
  transform:{ afirmativa:'You want coffee.', negativa:"You don't want coffee.", pergunta:'What do you want?', resposta:'' },
  mini:{ prompt:'Complete: "___ do you need?"', answer:'What' },
  extra:{ prompt:'Complete: "___ do you live?"', answer:'Where' },
  listening:null },

{ id:'d4', topic:'dodoesdid', title:'Por que o "do" vem depois da WH-word?',
  question:'Por que a ordem é WH-word primeiro, e só depois o do?',
  shortAnswer:'Porque a WH-word sempre define QUAL informação falta antes de qualquer outra coisa na frase.',
  logicPt:'A WH-word "abre" a pergunta anunciando o tipo de resposta esperada; o resto vem em seguida, como numa pergunta comum.',
  technical:'Ordem fixa: WH-word + auxiliar + sujeito + verbo + complemento? — a WH-word sempre ocupa a primeira posição.',
  metaphor:'A WH-word é quem abre a porta da sala; o resto da frase entra depois, na ordem de sempre.',
  broken:[['Why','motivo'],['do','auxiliar'],['you','sujeito'],['study','verbo'],['English','complemento']],
  ptComparison:'Em português, "por que" também vem primeiro — aqui o que muda é o auxiliar extra.',
  commonError:'Inverter a ordem: "Do why you study English?"',
  transform:{ afirmativa:'You study English.', negativa:"You don't study English.", pergunta:'Why do you study English?', resposta:'' },
  mini:{ prompt:'Reorganize: "work / where / you / do"', answer:'Where do you work?' },
  extra:{ prompt:'Reorganize: "you / do / why / travel"', answer:'Why do you travel?' },
  listening:null },

{ id:'d5', topic:'dodoesdid', title:'Por que "Do you have a car?" precisa de "do" se "have" já é um verbo?',
  question:'Have já é um verbo, por que precisa de outro (do) do lado?',
  shortAnswer:'Porque have, aqui, é o verbo PRINCIPAL comum (significa "ter"), e todo verbo principal comum precisa de do/does/did para perguntar.',
  logicPt:'Have-posse é "tímido" igual qualquer outro verbo (like, work, travel) — só o have AUXILIAR de tempo perfeito é diferente.',
  technical:'Regra: verbo principal comum + presente + pergunta = do/does + sujeito + verbo na forma base.',
  metaphor:'Have-posse é só mais um verbo "tímido" da fila; ele não é exceção.',
  broken:[['Do','auxiliar'],['you','sujeito'],['have','verbo principal, "ter"'],['a car','complemento']],
  ptComparison:'Em português não existe isso — "Você tem um carro?" muda só a entonação.',
  commonError:'"Have you a car?" (forma britânica antiga) ou "Are you have a car?" (misturar to be com have).',
  transform:{ afirmativa:'You have a car.', negativa:"You don't have a car.", pergunta:'Do you have a car?', resposta:'' },
  mini:{ prompt:'Corrija: "Have you a dog?"', answer:'Do you have a dog?' },
  extra:{ prompt:'Repita com "need": faça a pergunta.', answer:'Do you need help?' },
  listening:null },

{ id:'d6', topic:'dodoesdid', title:'Qual é a diferença entre "do" como verbo principal e "do" como auxiliar?',
  question:'Como sei se o do é o verbo de verdade ou só o organizador da frase?',
  shortAnswer:'Se do é o ÚNICO verbo da frase, ele é principal. Se aparece do lado de OUTRO verbo, ele é auxiliar.',
  logicPt:'Teste rápido: existe outro verbo na frase? Se sim, o do é auxiliar.',
  technical:'Do principal: "I do my homework." Do auxiliar: "Do you like it?" (o verbo principal é "like").',
  metaphor:'Do principal é o ator da cena; do auxiliar é só o diretor de palco, não aparece na história.',
  broken:[['I','sujeito'],['do','verbo principal, "fazer"'],['the dishes','complemento']],
  ptComparison:'Em português, "eu faço" é sempre o verbo de verdade — não existe essa versão "vazia" do "fazer".',
  commonError:'Traduzir todo do como "fazer", inclusive quando ele é só auxiliar.',
  transform:{ afirmativa:'I do the dishes. (principal) vs. Do you wash the dishes? (auxiliar)', negativa:'', pergunta:'', resposta:'' },
  mini:{ prompt:'Classifique o do: "I do yoga every morning."', answer:'Principal.' },
  extra:{ prompt:'"Do you do yoga?" — classifique os dois do.', answer:'O primeiro é auxiliar, o segundo é principal.' },
  listening:null },

{ id:'d7', topic:'dodoesdid', title:'Por que usamos "did + verbo base" e não "did + verbo no passado"?',
  question:'Por que não junta o did com o verbo já no passado?',
  shortAnswer:'Porque o did JÁ carrega sozinho a informação de passado da frase inteira — colocar os dois marcaria o passado duas vezes.',
  logicPt:'Regra do "ladrão": quando did aparece, ele rouba o passado só para si; o verbo principal fica na forma base.',
  technical:'Estrutura: Did + sujeito + verbo BASE + complemento? (nunca -ed ou irregular).',
  metaphor:'"Ladrão do passado" — o did rouba a marca de tempo e não deixa o verbo principal levar nada.',
  broken:[['Did','auxiliar de passado'],['you','sujeito'],['watch','verbo base, não "watched"'],['the race','complemento']],
  ptComparison:'Em português marcamos o passado só uma vez também, mas mudando o próprio verbo, sem auxiliar extra.',
  commonError:'"Did you watched the race?" — dobrar a marca de passado.',
  transform:{ afirmativa:'You watched the race.', negativa:"You didn't watch the race.", pergunta:'Did you watch the race?', resposta:'' },
  mini:{ prompt:'Corrija: "Did she worked yesterday?"', answer:'Did she work yesterday?' },
  extra:{ prompt:'Corrija: "Did they went home?"', answer:'Did they go home?' },
  listening:null },

{ id:'d8', topic:'dodoesdid', title:'Por que "Did you watch?" está correto e "Did you watched?" está errado?',
  question:'Essa eu ainda erro direto — por que não pode "did you watched"?',
  shortAnswer:'Porque o did já é a ÚNICA marca de passado permitida na frase; o verbo depois dele sempre volta para a forma base, mesmo em verbos irregulares.',
  logicPt:'Isso vale para TODOS os verbos, regulares ou irregulares: did you go (não "went"), did you eat (não "ate").',
  technical:'Regra fixa, sem exceção: did + verbo base, sempre.',
  metaphor:'O "ladrão" não aceita dividir o butim — ou o passado fica com o did, ou com o verbo, nunca com os dois.',
  broken:[['Did','passado'],['you','sujeito'],['go','base, não "went"'],['home','complemento']],
  ptComparison:'Em português não existe essa regra de "só um lugar pode marcar o tempo" — por isso é a armadilha mais comum de brasileiros.',
  commonError:'"Did you ate breakfast?", "Did you went there?", "Did you saw it?" — todos errados pelo mesmo motivo.',
  transform:{ afirmativa:'Did you eat breakfast? / Did you go there? / Did you see it?', negativa:'', pergunta:'', resposta:'' },
  mini:{ prompt:'Corrija: "Did you bought the tickets?"', answer:'Did you buy the tickets?' },
  extra:{ prompt:'Repita o padrão com "came" e "had".', answer:'Did you come...? / Did you have...?' },
  listening:{ file:'audio/did_listening_01.mp3', transcript:'Did you watch the race?', q:'Qual é o verbo principal desta frase?', a:'Watch.' } }
];

// ---------- Explicações alternativas ("Explique de outro jeito") — Seção E ----------
export const ALT_EXPLANATIONS = {
  dodoesdid: [
    { label:'Metáfora visual', text:'Do/does/did são o "crachá de acesso" que a frase precisa mostrar para virar pergunta ou negativa — sem crachá, não entra.' },
    { label:'Comparação com português', text:'Em português a pergunta muda só a entonação da voz ("Você trabalha aqui?"); em inglês, essa "mudança" precisa aparecer fisicamente como uma palavra (do/does/did).' },
    { label:'Engenharia da frase', text:'Toda frase tem um "slot" fixo logo depois do sujeito reservado para marcar tempo+pessoa. No presente, o slot é preenchido pelo verbo (afirmativa) ou por do/does (pergunta/negativa). No passado, por -ed (afirmativa) ou did (pergunta/negativa). Nunca os dois ao mesmo tempo.' }
  ]
};

// ---------- Laboratório "Montando a Frase" ----------
export const LAB_SENTENCES = [
  { id:1, context:'Trabalho remoto / entrevista [🎯 ENTREVISTA]', type:'do', verb:'work', complement:'remotely', timeMarker:'', wh:null, subjectDefault:'you', translation:'Você trabalha remotamente?',
    pieces:[['Do','auxiliar'],['you','sujeito'],['work','verbo principal'],['remotely','complemento / advérbio']] },
  { id:2, context:'Marketing [🎯 ENTREVISTA]', type:'do', verb:'work', complement:'with marketing campaigns', timeMarker:'', wh:null, subjectDefault:'she', translation:'Ela trabalha com campanhas de marketing.',
    pieces:[['She','sujeito'],['works','verbo principal (3ª pessoa +s)'],['with marketing campaigns','complemento']] },
  { id:3, context:'Customer Success [🎯 ENTREVISTA]', type:'do', verb:'like', complement:'about customer service', timeMarker:'', wh:'What', subjectDefault:'you', translation:'O que você gosta no atendimento ao cliente?',
    pieces:[['What','WH-word'],['do','auxiliar'],['you','sujeito'],['like','verbo principal'],['about customer service','complemento']] },
  { id:4, context:'Inteligência artificial', type:'be', verb:'', complement:'into AI tools', timeMarker:'', wh:null, subjectDefault:'you', translation:'Você é fã de ferramentas de IA?',
    pieces:[['Are','to be (folgado)'],['you','sujeito'],['into AI tools','complemento com preposição']] },
  { id:5, context:'Viagens / Itália', type:'do', verb:'travel', pastForm:'traveled', complement:'to Italy', timeMarker:' last year', wh:null, subjectDefault:'you', translation:'Você viajou para a Itália ano passado?',
    pieces:[['Did','auxiliar (ladrão do passado)'],['you','sujeito'],['travel','verbo base, sem -ed'],['to Italy','complemento de lugar'],['last year','marcador de tempo']] },
  { id:6, context:'Séries / lazer', type:'be', verb:'', complement:'into binge-watching Friends', timeMarker:' after work', wh:null, subjectDefault:'i', translation:'Eu curto maratonar Friends depois do trabalho.',
    pieces:[["I'm",'sujeito + to be'],['into','preposição fixa'],['binge-watching','verbo -ing (obrigatório após preposição)'],['Friends','complemento'],['after work','marcador de tempo']] },
  { id:7, context:'Entrevista / experiência [🎯 ENTREVISTA]', type:'do', verb:'do', complement:'', timeMarker:'', wh:'What', subjectDefault:'you', translation:'O que você faz (da vida)?',
    pieces:[['What','WH-word'],['do','auxiliar'],['you','sujeito'],['do','verbo principal ("fazer/atuar como")']] }
];

// ---------- Auxiliares e Modais (Grupos A–D) ----------
export const AUX_GROUPS = [
  { id:'A', title:'DO / DOES / DID — estrutura da pergunta e negativa', metaphor:'"do/does" = ponto de interrogação dentro da frase · "did" = ladrão do passado',
    items:[
      { word:'DO', literal:'"fazer" (só quando é o único verbo da frase)', func:'Organiza pergunta/negativa no Present Simple para I/you/we/they.',
        rule:'Do + sujeito (I/you/we/they) + verbo base + complemento?',
        affirmative:'You like it.', negative:"You don't like it.", question:'Do you like it?', shortAnswer:'Yes, I do. / No, I don\'t.',
        ptComparison:'Em português não existe palavra equivalente nessa posição — o "do" não tem tradução porque sua função é 100% estrutural.',
        commonError:'Esquecer o "do": "You like it?" (soa incompleto em contexto formal como entrevista).',
        profExample:'Do you have experience with CRM tools?', dailyExample:'Do you want coffee?',
        mini:{ prompt:'Complete: "___ you speak English?"', answer:'Do' } },
      { word:'DOES', literal:'Não tem sozinho — é a forma de "do" para he/she/it.', func:'Mesma função do do, exclusiva para 3ª pessoa do singular no presente.',
        rule:'Does + he/she/it + verbo base + complemento? — o verbo principal PERDE o -s.',
        affirmative:'She works here.', negative:"She doesn't work here.", question:'Does she work here?', shortAnswer:'Yes, she does. / No, she doesn\'t.',
        ptComparison:'É o mesmo "faz" fantasma do do, só que reservado para ele/ela/isso.',
        commonError:'"Does she works here?" — duplicar a marca de 3ª pessoa (no does E no verbo).',
        profExample:'Does the company offer remote work?', dailyExample:'Does he like pizza?',
        mini:{ prompt:'Corrija: "Does he plays tennis?"', answer:'Does he play tennis?' },
        listening:{ transcript:'Does she work here?', q:'Presente ou passado?', a:'Presente.' } },
      { word:'DID', literal:'Não tem sozinho — é a forma de passado de "do".', func:'Organiza pergunta/negativa no passado, para QUALQUER sujeito.',
        rule:'Did + sujeito + verbo base + complemento? — o did carrega sozinho o passado.',
        affirmative:'You watched the race.', negative:"You didn't watch the race.", question:'Did you watch the race?', shortAnswer:'Yes, I did. / No, I didn\'t.',
        ptComparison:'Não existe estrutura parecida — em português a pergunta no passado só muda a entonação.',
        commonError:'"Did you watched the race?" — o verbo NÃO pode ficar no passado depois do did.',
        profExample:'Did you manage a team before?', dailyExample:'Did you sleep well?',
        mini:{ prompt:'Transforme para pergunta: "She traveled to Italy."', answer:'Did she travel to Italy?' } }
    ] },
  { id:'B', title:'TO BE — o verbo que trabalha sozinho', metaphor:'to be = "folgado": nunca pede ajuda, vai sozinho para o início da pergunta.',
    items:[
      { word:'TO BE (am/is/are/was/were)', literal:'"ser/estar"', func:'É o único verbo que NUNCA precisa de do/does/did para perguntar ou negar.',
        rule:'Am/Is/Are/Was/Were + sujeito + complemento?',
        affirmative:'He is tired. / They were tired.', negative:"He isn't tired. / They weren't tired.", question:'Is he tired? / Were they tired?', shortAnswer:'Yes, he is. / No, he isn\'t.',
        ptComparison:'"Ele É cansado" muda de posição para "É ele cansado?" — existe paralelo em português formal/arcaico ("És tu o responsável?").',
        commonError:'"Do you are tired?" — nunca junte do com to be.',
        profExample:'Are you available for a call this week?', dailyExample:'Is it cold outside?',
        mini:{ prompt:'Corrija: "Do you are ready?"', answer:'Are you ready?' } }
    ] },
  { id:'C', title:'CAN / COULD / SHOULD / WOULD — capacidade, conselho, hipótese  🔭', metaphor:'Modais são "folgados" como o to be — nunca precisam de do/does/did.',
    items:[
      { word:'CAN', literal:'capacidade/possibilidade no presente', func:'"I can speak English." → "Can you speak English?" → "I can\'t speak English."',
        rule:'Modal + sujeito + verbo base + complemento?', affirmative:'I can speak English.', negative:"I can't speak English.", question:'Can you speak English?', shortAnswer:'',
        ptComparison:'"Você pode falar inglês?" também não tem um "faz" escondido — aqui o paralelo com o português ajuda.',
        commonError:'"Do you can speak English?" — nunca junte do com modal.',
        profExample:'', dailyExample:'', mini:null },
      { word:'COULD', literal:'capacidade no passado ou pedido educado', func:'"I could help you yesterday." / "Could you send me the report?"',
        rule:'', affirmative:'', negative:'', question:'Could you send me the report?', shortAnswer:'', ptComparison:'', commonError:'', profExample:'', dailyExample:'',
        mini:{ prompt:'Complete com o modal certo: "___ you help me with this file, please?"', answer:'Could' } },
      { word:'SHOULD', literal:'conselho/recomendação', func:'"You should practice every day."', rule:'', affirmative:'You should practice every day.', negative:'', question:'', shortAnswer:'', ptComparison:'', commonError:'', profExample:'', dailyExample:'', mini:null },
      { word:'WOULD', literal:'hipótese/educação, base do condicional', func:'"I would love to work here." / "Would you like some coffee?"', rule:'', affirmative:'', negative:'', question:'Would you like some coffee?', shortAnswer:'', ptComparison:'', commonError:'',
        profExample:'I would like to learn more about the role. [🎯 ENTREVISTA]', dailyExample:'', mini:null }
    ] },
  { id:'D', title:'HAVE / HAS / HAD — posse e auxiliar de tempo perfeito  🔭', metaphor:'have-posse é o "dono de um objeto"; have-auxiliar é o "crachá de experiência".',
    items:[
      { word:'HAVE / HAS / HAD', literal:'"ter" (posse) — Ex.: "I have a car."', func:'Como auxiliar (have/has + particípio) indica experiência/resultado: "I have worked with CRM tools."',
        rule:'have/has (I/you/we/they · he/she/it) · had (passado, todos os sujeitos).',
        affirmative:'I have worked here.', negative:"I haven't worked here.", question:'Have you worked here?', shortAnswer:'',
        ptComparison:'O "ter" auxiliar existe em português também: "Eu tenho trabalhado muito" = "I have worked a lot" — um dos poucos casos em que a tradução literal ajuda.',
        commonError:'"Do you have worked here?" — o have já é auxiliar suficiente: "Have you worked here?"',
        profExample:'I have managed social media campaigns for two years. [🎯 ENTREVISTA]', dailyExample:'',
        mini:{ prompt:'Identifique a função: "She has a new laptop." vs. "She has worked here for years."', answer:'Posse / auxiliar de tempo perfeito.' },
        listening:{ transcript:'Have you worked here?', q:'Have aqui é posse ou auxiliar?', a:'Auxiliar.' } }
    ] }
];

// ---------- WH-words ----------
export const WH_WORDS = [
  { word:'What', busca:'coisa/informação', example:'What do you do?', translation:'O que você faz (da vida)?', error:'Esquecer o segundo "do" (verbo principal)', interview:'What are your main responsibilities?', daily:"What's for dinner?" },
  { word:'Where', busca:'lugar', example:'Where do you work?', translation:'Onde você trabalha?', error:'Confundir com "Were" (to be no passado)', interview:'Where have you worked before?', daily:'Where do you live?' },
  { word:'When', busca:'tempo', example:'When did you start this job?', translation:'Quando você começou este trabalho?', error:'Esquecer o "did" e deixar o verbo no passado sozinho', interview:'When are you available to start?', daily:'When is your birthday?' },
  { word:'Who', busca:'pessoa', example:'Who do you report to?', translation:'A quem você se reporta?', error:'Usar "Who" no lugar de "Whom" (raro atrapalhar)', interview:'Who did you work with on this project?', daily:'Who is your best friend?' },
  { word:'Why', busca:'motivo', example:'Why do you want this job?', translation:'Por que você quer esta vaga?', error:'Responder só com "Because" sem completar a frase', interview:'Why are you leaving your current job?', daily:'Why do you like this song?' },
  { word:'Which', busca:'escolha entre opções', example:'Which tool do you prefer, Excel or Google Sheets?', translation:'Qual (dentre as opções)?', error:'Confundir com "What" quando não há opções claras', interview:'Which project are you most proud of?', daily:'Which movie do you want to watch?' },
  { word:'Whose', busca:'posse', example:'Whose idea was this campaign?', translation:'De quem foi essa ideia?', error:'Confundir com "Who\'s" (contração de "who is")', interview:'Whose responsibility was the budget?', daily:'Whose phone is this?' },
  { word:'How', busca:'maneira/modo', example:'How do you handle deadlines?', translation:'Como você lida com prazos?', error:'Usar "How" para perguntar profissão (o certo é "What do you do?")', interview:'How do you prioritize your tasks?', daily:'How was your weekend?' }
];

// ---------- English for Interviews — dados corrigidos (Seção A) ----------
export const INTERVIEW_BLOCKS = [
  { id:1, title:'Apresentação profissional', a2:'I work in marketing and communication.',
    natural:'I\'m a marketing and communications professional with experience across internal communications, digital marketing, and customer success.',
    tag:'[EDITÁVEL — ajuste tempo de experiência e ênfase conforme a vaga]',
    structure:'I\'m a [profissão] with experience across [área 1], [área 2], and [área 3].',
    keywords:['professional','experience across'] },
  { id:2, title:'Formação', a2:'I studied Digital Media Management.',
    natural:'I have a degree in Digital Media Management (Gestão de Mídias Digitais), a performance marketing certification from EBAC, and an SQL certification.',
    tag:'[EDITÁVEL — confirmar nomes exatos das certificações antes de usar em entrevista real]',
    structure:'I have a degree in [curso], a [certificação 1], and a [certificação 2].',
    keywords:['degree','certification'] },
  { id:3, title:'Experiência', a2:'I worked on an internal communication campaign.',
    natural:'One of my main projects was an internal communication campaign that significantly increased employee participation.',
    tag:'[EDITÁVEL — preencha o número real de participação e a empresa antes de usar]',
    structure:'One of my main projects was [projeto] at [empresa], which [resultado, verbo no passado].',
    fillField:'Preencha aqui o resultado exato, com os números certos:',
    commonError:'Usar "did" duplicado com verbo no passado ("which did raised" — errado; o certo é só "which raised").',
    keywords:['main project','significantly increased'] },
  { id:4, title:'Responsabilidades', a2:'I take care of campaigns and I help clients.',
    natural:'I\'m responsible for planning and executing marketing campaigns, as well as supporting customers through the CRM.',
    tag:'[EDITÁVEL — ajuste conforme a vaga]',
    structure:'I\'m responsible for [tarefa 1] and [tarefa 2], as well as [tarefa 3].',
    keywords:['responsible for','as well as'] },
  { id:5, title:'Resultados', a2:'My campaign had good results.',
    natural:'That campaign achieved strong results in employee engagement.',
    tag:'[EDITÁVEL — sem ranking/percentual até confirmação]',
    structure:'[Projeto] achieved strong results in [área].',
    fillField:'Preencha aqui o número real quando tiver a fonte em mãos:',
    keywords:['achieved','engagement'] },
  { id:6, title:'Ferramentas', a2:'I use digital marketing tools and CRM.',
    natural:'I have hands-on experience with digital marketing platforms and CRM tools.',
    tag:'[EDITÁVEL — listar ferramentas específicas: Google Ads? Meta Ads? RD Station? HubSpot?]',
    structure:'I have hands-on experience with [ferramenta 1], [ferramenta 2], and [ferramenta 3].',
    keywords:['hands-on experience','platforms'] },
  { id:7, title:'Trabalho remoto', a2:'I can work remote. I organize my own time.',
    natural:'I\'m comfortable working remotely and I\'m used to managing my own schedule and priorities independently.',
    tag:'[EDITÁVEL]',
    structure:'I\'m comfortable [gerúndio] and I\'m used to [gerúndio].',
    note:'"used to" + verbo-ing = estar acostumado com algo (não confundir com "used to" + verbo base, hábito no passado: "I used to work there").',
    keywords:['comfortable','used to','independently'] },
  { id:8, title:'Pontos fortes', a2:'I am organized. I learn fast.',
    natural:'I\'d say my main strengths are adaptability and fast learning — I pick up new tools and processes quickly.',
    tag:'[EDITÁVEL]',
    structure:'I\'d say my main strengths are [força 1] and [força 2].',
    keywords:["I'd say",'strengths','pick up'] },
  { id:9, title:'Mudança de carreira', a2:'I want to change my career a little. I want to use technology more.',
    natural:'I\'m currently transitioning toward a role that combines my marketing background with data and AI tools.',
    tag:'[EDITÁVEL]',
    structure:'I\'m currently transitioning toward a role that combines [experiência anterior] with [nova direção].',
    keywords:['transitioning','combines','background'] },
  { id:10, title:'Perguntas ao recrutador', a2:'What is the team like? Is the job remote?',
    natural:'Could you tell me more about the team I\'d be working with? And is there flexibility for remote work?',
    tag:'[EDITÁVEL]',
    structure:'Could you tell me more about [assunto]? And is there [pergunta de acompanhamento]?',
    keywords:['Could you tell me','flexibility'] }
];

// ---------- Printables (Folhas 1–4) ----------
export const PRINTABLES = [
  { id:'f1', title:'Folha 1 — Ordem básica da frase', lines:[
    'Afirmação: Sujeito + Verbo + Complemento — "She works here."',
    'Negação (to be): Sujeito + To Be + NOT + Complemento — "She is not tired."',
    'Negação (outros verbos): Sujeito + Do/Does/Did + NOT + Verbo — "She does not work here."',
    'Pergunta: (Auxiliar/To Be) + Sujeito + Verbo + Complemento + ? — "Does she work here?"' ] },
  { id:'f2', title:'Folha 2 — To Be x Outros Verbos', lines:[
    'To Be é "folgado": vai sozinho para o início da pergunta. Is she tired? / Was he here?',
    'Outros verbos são "tímidos": precisam de do/does/did. Does she work? / Did he arrive?' ] },
  { id:'f3', title:'Folha 3 — Do / Does / Did', lines:[
    'DO — I/you/we/they, presente. Do you like it?',
    'DOES — he/she/it, presente (verbo perde o -s). Does she work here?',
    'DID — qualquer sujeito, passado ("ladrão do passado": verbo volta à forma base). Did you watch the race?' ] },
  { id:'f4', title:'Folha 4 — WH-words', grid:true }
];

export const AUDIO_MANIFEST_FALLBACK = [
  { id:'do-explicacao-pt', module:'dodoesdid', type:'explanation', language:'pt-BR', file:'audio/do_explicacao_pt.mp3',
    transcript:'O primeiro do organiza a pergunta. O segundo do é o verbo principal, e significa fazer ou atuar como. Cada do tem um trabalho diferente na frase.' },
  { id:'does-explicacao-pt', module:'dodoesdid', type:'explanation', language:'pt-BR', file:'audio/does_explicacao_pt.mp3',
    transcript:'Does é a forma de do usada com ele, ela ou isso no presente. Quando does aparece, o verbo principal perde o s no final.' },
  { id:'did-explicacao-pt', module:'dodoesdid', type:'explanation', language:'pt-BR', file:'audio/did_explicacao_pt.mp3',
    transcript:'Did carrega sozinho o passado da frase inteira. Por isso o verbo principal volta para a forma base, sem ed e sem mudar de forma.' },
  { id:'whwords-explicacao-pt', module:'whwords', type:'explanation', language:'pt-BR', file:'audio/whwords_explicacao_pt.mp3',
    transcript:'A wh word escolhe qual informação está faltando, mas ela não substitui o auxiliar. As duas peças aparecem juntas na frase.' },
  { id:'be-explicacao-pt', module:'tobe', type:'explanation', language:'pt-BR', file:'audio/be_explicacao_pt.mp3',
    transcript:'To be é o único verbo que nunca precisa de do, does ou did. Ele mesmo pula para o início da pergunta, sozinho.' },
  { id:'have-explicacao-pt', module:'have', type:'explanation', language:'pt-BR', file:'audio/have_explicacao_pt.mp3',
    transcript:'Have com substantivo depois é posse, significa ter. Have com particípio depois é auxiliar de tempo perfeito, indica experiência.' },
  { id:'modais-explicacao-pt', module:'modais', type:'explanation', language:'pt-BR', file:'audio/modais_explicacao_pt.mp3',
    transcript:'Os modais can, could, should e would nunca precisam de do, does ou did. Eles vão sozinhos para o início da pergunta, igual ao to be.' }
];
