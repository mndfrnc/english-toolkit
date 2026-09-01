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
  { id:'greetings', label:'Cumprimentos e apresentação pessoal', kind:'practice', practiceId:'greetings' },
  { id:'tobe', label:'Verbo To Be', kind:'practice', practiceId:'tobe' },
  { id:'personalinfo', label:'Dados pessoais', kind:'practice', practiceId:'personalinfo' },
  { id:'smalltalk', label:'Small talk e perguntas abertas', kind:'practice', practiceId:'smalltalk' },
  { id:'likes', label:'Like/love/hate + gerúndio', kind:'practice', practiceId:'likes' },
  { id:'dodoesdid', label:'Auxiliares Do/Does/Did', kind:'duvidas' },
  { id:'whwords', label:'WH-words', kind:'whwords' },
  { id:'interview', label:'Inglês para entrevistas', kind:'interview' }
];

// Estrutura pedagógica mínima para os 5 tópicos que ainda não tinham módulo
// próprio (necessária para que o progresso desses tópicos seja real, não
// travado em "ainda não estudado"). Conteúdo compatível com o material-base
// (regras já documentadas de to be, do/does/did, gerúndio após preposição) —
// nenhum dado pessoal ou profissional novo foi inventado aqui.
export const PRACTICE_TOPICS = {
  greetings: { title:'Cumprimentos e apresentação pessoal', shortLabel:'Cumprimentos',
    intro:'Saudações formais/informais e como se apresentar (nome, origem, profissão).',
    drills:[
      { id:'g1', prompt:'Complete (formal): "Good afternoon! ___ nice to meet you."', answer:"It's", explanation:'"It\'s nice to meet you" é a resposta padrão e educada ao ser apresentado.' },
      { id:'g2', prompt:'Complete (informal, entre amigos): "Hey! ___ up?"', answer:"What's", explanation:'"What\'s up?" é uma saudação informal comum entre amigos ou colegas próximos.' },
      { id:'g3', prompt:'Complete: "Hi, I\'m Amanda. I\'m ___ Brazil." (origem)', answer:'from', explanation:'Usamos "from" para indicar origem: I\'m from Brazil.' },
      { id:'g4', prompt:'Complete a pergunta sobre profissão: "___ do you do?"', answer:'What', explanation:'"What do you do?" pergunta qual é a profissão ou ocupação da pessoa.' },
      { id:'g5', prompt:'Complete a resposta a uma apresentação: "___ to meet you too!"', answer:'Nice', explanation:'"Nice to meet you (too)" é a resposta padrão ao ser apresentado.' }
    ] },
  tobe: { title:'Verbo To Be', shortLabel:'To Be',
    intro:'To Be é "folgado": nunca precisa de do/does/did.',
    drills:[
      { id:'t1', prompt:'Complete: "I ___ a marketing professional."', answer:'am', explanation:'Com "I", o to be no presente é "am".' },
      { id:'t2', prompt:'Complete: "She ___ interested in AI tools."', answer:'is', explanation:'Com he/she/it, o to be no presente é "is".' },
      { id:'t3', prompt:'Complete: "They ___ available for a call."', answer:'are', explanation:'Com you/we/they, o to be no presente é "are".' },
      { id:'t4', prompt:'Complete a negativa: "He ___ here right now."', answer:"isn't", explanation:'Negativa de "is" = "isn\'t" — sem precisar de do/does.' },
      { id:'t5', prompt:'Complete a pergunta: "___ you ready for the interview?"', answer:'Are', explanation:'To Be vai sozinho para o início da pergunta: Are you...?' }
    ] },
  personalinfo: { title:'Dados pessoais', shortLabel:'Dados pessoais',
    intro:'Soletração, telefone e endereço em inglês.',
    drills:[
      { id:'p1', prompt:'Complete: "Could you ___ your last name for me?" (soletrar)', answer:'spell', explanation:'"Spell" = soletrar. "Could you spell that?" é um pedido comum e educado.' },
      { id:'p2', prompt:'Complete: "What\'s your phone ___?"', answer:'number', explanation:'"Phone number" = número de telefone.' },
      { id:'p3', prompt:'Complete: "I live ___ 120 Main Street."', answer:'at', explanation:'Usamos "at" antes de um endereço específico: I live at 120 Main Street.' },
      { id:'p4', prompt:'Complete: "My ___ code is 50000." (código postal)', answer:'postal', explanation:'"Postal code" = CEP / código postal.' },
      { id:'p5', prompt:'Complete: "You can reach me ___ this email address."', answer:'at', explanation:'"Reach me at [email]" é a forma natural de dar um contato.' }
    ] },
  smalltalk: { title:'Small talk e perguntas abertas', shortLabel:'Small talk',
    intro:'Perguntas abertas para manter uma conversa casual.',
    drills:[
      { id:'s1', prompt:'Complete: "___ has your week been?"', answer:'How', explanation:'"How has your week been?" é uma pergunta aberta comum de small talk.' },
      { id:'s2', prompt:'Complete: "___ do you think about remote work?"', answer:'What', explanation:'"What do you think about...?" pede uma opinião.' },
      { id:'s3', prompt:'Complete a resposta a "How are you?": "I\'m doing ___, thanks!"', answer:'well', explanation:'"I\'m doing well" é uma resposta natural e comum.' },
      { id:'s4', prompt:'Complete a pergunta de volta: "I\'m good, thanks! And ___?"', answer:'you', explanation:'"And you?" devolve a pergunta de forma natural.' },
      { id:'s5', prompt:'Complete: "___ was your weekend?"', answer:'How', explanation:'"How was your weekend?" é uma abertura clássica de small talk.' }
    ] },
  likes: { title:'Like/love/hate + gerúndio', shortLabel:'Likes',
    intro:'Depois de preposição, o verbo sempre vai para -ing.',
    drills:[
      { id:'l1', prompt:'Complete: "I love ___ (travel)."', answer:'traveling', explanation:'Depois de like/love/hate, o verbo geralmente vai para -ing.' },
      { id:'l2', prompt:'Complete: "She hates ___ (wait) in line."', answer:'waiting', explanation:'"Hate" + verbo-ing: she hates waiting.' },
      { id:'l3', prompt:'Complete: "I\'m into ___ (learn) new tools."', answer:'learning', explanation:'Depois de preposição ("into"), o verbo SEMPRE vai para -ing.' },
      { id:'l4', prompt:'Complete: "They like ___ (watch) series after work."', answer:'watching', explanation:'"Like" + verbo-ing também é comum e natural.' },
      { id:'l5', prompt:'Complete: "He wants ___ (learn) English." (want pede to+infinitivo)', answer:'to learn', explanation:'"Want" é sempre seguido de to+infinitivo, nunca -ing: he wants to learn.' }
    ] }
};

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
  broken:[['Did','auxiliar de passado'],['you','sujeito'],['watch','verbo base, não "watched"'],['the new episode','complemento']],
  ptComparison:'Em português marcamos o passado só uma vez também, mas mudando o próprio verbo, sem auxiliar extra.',
  commonError:'"Did you watched the new episode?" — dobrar a marca de passado.',
  transform:{ afirmativa:'You watched the new episode.', negativa:"You didn't watch the new episode.", pergunta:'Did you watch the new episode?', resposta:'' },
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
  listening:{ file:'audio/did_listening_01.mp3', transcript:'Did you watch the new episode?', q:'Qual é o verbo principal desta frase?', a:'Watch.' } },

{ id:'d9', topic:'tobe', title:'Por que o verbo "to be" não precisa de do/does/did?',
  question:'Por que to be é diferente de todos os outros verbos?',
  shortAnswer:'Porque to be já tem "força" própria para ir sozinho ao início da pergunta — ele não precisa de ajuda.',
  logicPt:'É uma exceção do inglês: to be, modais e o have auxiliar já carregam tempo/pessoa sozinhos.',
  technical:'"To be" é um verbo "auxiliar-capaz": ele mesmo se move para a posição de pergunta, sem precisar de do/does/did.',
  metaphor:'To be é "folgado" — ele não pede ajuda a ninguém.',
  broken:[['Is','to be'],['he','sujeito'],['tired','complemento']],
  ptComparison:'Em português, o verbo "ser/estar" também muda de posição sozinho em perguntas formais ("És tu o responsável?") — não é tão estranho quanto parece.',
  commonError:'"Do you are tired?" — juntar do com to be, redundante e errado.',
  transform:{ afirmativa:'You are tired.', negativa:"You aren't tired.", pergunta:'Are you tired?', resposta:'' },
  mini:{ prompt:'Corrija: "Does she is happy?"', answer:'Is she happy?' },
  extra:{ prompt:'Corrija: "Do they are ready?"', answer:'Are they ready?' },
  listening:null },

{ id:'d10', topic:'tobe', title:'Por que "Are you tired?" está correto e "Do you are tired?" está errado?',
  question:'Essa eu confundo direto — por que não pode juntar do com are?',
  shortAnswer:'Porque "are" (parte do to be) já faz o trabalho que o do faria — juntar os dois duplica a mesma função.',
  logicPt:'Cada frase só pode ter UM organizador de pergunta: ou é to be sozinho, ou é do/does/did + verbo comum, nunca os dois juntos.',
  technical:'Teste rápido: se o verbo principal é uma forma de to be (am/is/are/was/were), NUNCA use do/does/did.',
  metaphor:'São dois "porteiros" diferentes — só um pode abrir a porta da pergunta por vez.',
  broken:[['Are','to be'],['you','sujeito'],['tired','complemento']],
  ptComparison:'Nenhum paralelo direto em português aqui — é uma regra puramente estrutural do inglês.',
  commonError:'"Do you are tired?", "Does he is here?", "Did they were happy?" — todos com o mesmo erro.',
  transform:{ afirmativa:'You are tired.', negativa:"You aren't tired.", pergunta:'Are you tired?', resposta:'' },
  mini:{ prompt:'Corrija: "Do you are ready?"', answer:'Are you ready?' },
  extra:{ prompt:'Corrija: "Does he is here?"', answer:'Is he here?' },
  listening:null },

{ id:'d11', topic:'modais', title:'Por que can/could/should/would também não usam do/does/did?',
  question:'Can, could, should, would também são "folgados" como o to be?',
  shortAnswer:'Sim — os modais são outro grupo que vai sozinho para o início da pergunta, igual ao to be.',
  logicPt:'Modais já carregam a ideia de capacidade/conselho/hipótese sozinhos; juntar com do/does/did seria redundante.',
  technical:'Regra: modal + sujeito + verbo BASE + complemento — nunca "do + modal".',
  metaphor:'Modais são da mesma "turma folgada" do to be.',
  broken:[['Can','modal'],['you','sujeito'],['speak','verbo base'],['English','complemento']],
  ptComparison:'Em português, "você pode falar inglês?" também não tem um "faz" escondido — aqui o paralelo ajuda.',
  commonError:'"Do you can speak English?", "Does she should go?" — nunca combine do/does/did com modal.',
  transform:{ afirmativa:'You can speak English.', negativa:"You can't speak English.", pergunta:'Can you speak English?', resposta:'' },
  mini:{ prompt:'Corrija: "Do you should study more?"', answer:'Should you study more?' },
  extra:{ prompt:'Complete com o modal certo: "___ you like some coffee?"', answer:'Would' },
  listening:null },

{ id:'d12', topic:'have', title:'Quando have significa "ter" e quando funciona como auxiliar?',
  question:'Have às vezes parece "ter" e às vezes parece outra coisa — como eu diferencio?',
  shortAnswer:'Se depois do have vem um SUBSTANTIVO, é posse. Se vem um VERBO NO PARTICÍPIO, é auxiliar de tempo perfeito.',
  logicPt:'Teste rápido: have + substantivo = "ter"; have + particípio = auxiliar (indica experiência/resultado).',
  technical:'Estrutura do tempo perfeito: have/has + particípio — não significa exatamente "ter", indica ação passada com relevância no presente.',
  metaphor:'Have-posse é o "dono de um objeto"; have-auxiliar é o "crachá de experiência".',
  broken:[['I','sujeito'],['have','auxiliar'],['worked','particípio'],['here','complemento']],
  ptComparison:'Em português, o "ter" auxiliar também existe: "Eu tenho trabalhado muito" é a mesma lógica de "I have worked a lot" — aqui a tradução literal ajuda.',
  commonError:'Confundir os dois e aplicar a regra do do/does no have-auxiliar: "Do you have worked here?" em vez de "Have you worked here?"',
  transform:{ afirmativa:'I have worked here.', negativa:"I haven't worked here.", pergunta:'Have you worked here?', resposta:'' },
  mini:{ prompt:'Classifique: "She has a new laptop." vs. "She has worked here for years."', answer:'Posse / auxiliar de tempo perfeito.' },
  extra:{ prompt:'Classifique: "He has two dogs." / "He has traveled a lot."', answer:'Posse / auxiliar.' },
  listening:{ file:'audio/have_listening_01.mp3', transcript:'Have you worked here?', q:'Have aqui é posse ou auxiliar?', a:'Auxiliar.' } },

{ id:'d13', topic:'have', title:'Qual é a diferença entre "I have a car." e "I have worked here."?',
  question:'As duas frases têm "have", mas parecem diferentes — por quê?',
  shortAnswer:'Na primeira, have é o verbo principal (posse). Na segunda, have é auxiliar, e o verbo principal de verdade é "worked".',
  logicPt:'A pista visual é o que vem depois do have: substantivo (car) = posse; particípio (worked) = auxiliar.',
  technical:'"I have a car." = presente simples, posse. "I have worked here." = present perfect, auxiliar + particípio.',
  metaphor:'No primeiro, have segura um objeto na mão; no segundo, have está de mãos livres, só carregando o tempo verbal.',
  broken:[['I','sujeito'],['have','auxiliar'],['worked','verbo principal, particípio'],['here','complemento']],
  ptComparison:'Em português a diferença também aparece: "eu tenho um carro" (posse) vs. "eu tenho trabalhado aqui" (auxiliar) — os dois "tenho" soam parecidos, mas fazem trabalhos diferentes.',
  commonError:'Tentar negar as duas frases da mesma forma sem perceber a diferença de estrutura.',
  transform:{ afirmativa:'I have a car. / I have worked here.', negativa:"I don't have a car. / I haven't worked here.", pergunta:'', resposta:'' },
  mini:{ prompt:'Classifique e negue: "They have a house." (posse)', answer:"They don't have a house." },
  extra:{ prompt:'Classifique e negue: "We have traveled a lot." (auxiliar)', answer:"We haven't traveled a lot." },
  listening:null },

{ id:'d14', topic:'toing', title:'Por que "I\'m into reading" está correto?',
  question:'Por que "reading" e não "to read" aqui?',
  shortAnswer:'Porque depois de uma preposição (into), o verbo em inglês sempre vira -ing — nunca fica no infinitivo com "to".',
  logicPt:'"Into" é preposição; depois de preposição, o verbo funciona como um substantivo, por isso ganha -ing.',
  technical:'Regra fixa: preposição + verbo = sempre -ing (gerúndio), sem exceção.',
  metaphor:'Depois de uma preposição, o verbo "se veste" de substantivo — e o traje de substantivo do verbo é o -ing.',
  broken:[["I'm",'sujeito + to be'],['into','preposição'],['reading','verbo-ing, obrigatório']],
  ptComparison:'Em português, "sou fã de ler" também usa o infinitivo — aqui não há paralelo direto, é uma regra só do inglês.',
  commonError:'"I\'m into to read." (usar "to" depois de preposição).',
  transform:{ afirmativa:"I'm into reading. / I'm crazy about cooking.", negativa:'', pergunta:'', resposta:'' },
  mini:{ prompt:'Complete: "He\'s into (play) ___ video games."', answer:'playing' },
  extra:{ prompt:'Complete: "They\'re afraid of (fly) ___."', answer:'flying' },
  listening:null },

{ id:'d15', topic:'toing', title:'Por que "I\'m into to read" está errado?',
  question:'Essa eu ainda erro — por que não pode usar "to" aqui?',
  shortAnswer:'Porque "to" + verbo (infinitivo) nunca vem depois de uma preposição em inglês — a regra é sempre preposição + verbo-ing.',
  logicPt:'É a mesma regra da Dúvida 14, vista pelo lado do erro: o "to" quebra a estrutura preposição+substantivo que o inglês exige aqui.',
  technical:'"Into" já é preposição; colocar "to" depois criaria duas partículas de ligação seguidas, o que o inglês não permite nessa posição.',
  metaphor:'Você não pode vestir o verbo de "substantivo" (-ing) e de "ação pura" (to+verbo) ao mesmo tempo — escolha um traje.',
  broken:[['into','preposição'],['reading','substantivo-ing, correto']],
  ptComparison:'Sem paralelo direto em português.',
  commonError:'"I\'m into to cook.", "She\'s crazy about to travel." — mesmo erro em outros verbos de gosto+preposição.',
  transform:{ afirmativa:"I'm into cooking. / She's crazy about traveling.", negativa:'', pergunta:'', resposta:'' },
  mini:{ prompt:'Corrija: "He\'s tired of to wait."', answer:"He's tired of waiting." },
  extra:{ prompt:'Corrija: "We\'re afraid of to fly."', answer:"We're afraid of flying." },
  listening:null },

{ id:'d16', topic:'toing', title:'Qual é a diferença entre read, to read e reading?',
  question:'Read, to read, reading — quando uso cada um?',
  shortAnswer:'Read é a forma base (depois de do/does/did e modais). To read é infinitivo (propósito ou depois de certos verbos). Reading é gerúndio (depois de preposições e em tempos contínuos).',
  logicPt:'Cada forma tem um "encaixe" gramatical específico — não são intercambiáveis livremente.',
  technical:'Base: "Do you read?" / Infinitivo: "I want to read." / Gerúndio: "I\'m into reading." ou "I\'m reading now."',
  metaphor:'São três roupas diferentes para o mesmo verbo — cada ocasião pede uma roupa certa.',
  broken:[['Does','auxiliar'],['she','sujeito'],['read','verbo base']],
  ptComparison:'Em português, "ler" muda de forma dependendo do contexto também (lendo, para ler, leia) — a lógica de "roupa certa para cada ocasião" existe nos dois idiomas, só os encaixes são diferentes.',
  commonError:'Misturar as três formas: "I want reading." (errado, "want" pede to+verbo: "I want to read.")',
  transform:{ afirmativa:"She wants to read. / She's reading. / She's into reading.", negativa:'', pergunta:'Does she read?', resposta:'' },
  mini:{ prompt:'Complete as três formas para "travel": base, infinitivo, gerúndio.', answer:"Do you travel? / I want to travel. / I'm into traveling." },
  extra:{ prompt:'Escolha a forma certa: "He\'s afraid of ___ (fail)."', answer:'failing' },
  listening:null },

{ id:'d17', topic:'grammarfoundations', title:'O que é sujeito?',
  question:'O que exatamente é "sujeito" numa frase?',
  shortAnswer:'É quem faz (ou é) a ação — a "pessoa/coisa principal" da frase.',
  logicPt:'Antes de traduzir qualquer palavra, pergunte: quem está fazendo isso?',
  technical:'Sujeito = substantivo ou pronome que concorda com o verbo principal e determina sua conjugação (I/you/we/they vs. he/she/it).',
  metaphor:'O sujeito é o "dono da cena" — tudo na frase gira em torno dele.',
  broken:[['She','sujeito'],['works','verbo'],['here','complemento']],
  ptComparison:'Igual em português: "Ela trabalha aqui" — "ela" também é o sujeito, na mesma posição.',
  commonError:'Confundir o sujeito com a primeira palavra da frase em frases invertidas ("In Recife, she works." — "Recife" não é o sujeito, "she" é).',
  transform:{ afirmativa:'My sister loves pizza.', negativa:'', pergunta:'Does he live in São Paulo?', resposta:'' },
  mini:{ prompt:'Identifique o sujeito: "My sister loves pizza."', answer:'My sister' },
  extra:{ prompt:'Aponte o sujeito: "Where do your parents live?"', answer:'your parents' },
  listening:null },

{ id:'d18', topic:'grammarfoundations', title:'O que é verbo principal?',
  question:'Qual é o verbo "de verdade" da frase, quando tem mais de uma palavra de ação?',
  shortAnswer:'É a palavra que carrega o SIGNIFICADO da ação — os auxiliares (do/does/did/have) só organizam a frase, não descrevem a ação.',
  logicPt:'Pergunte: se eu tirar os auxiliares, qual palavra ainda diz o que está acontecendo?',
  technical:'Verbo principal = verbo lexical, portador do significado semântico da frase.',
  metaphor:'O verbo principal é o "ator"; os auxiliares são a "produção" por trás das câmeras.',
  broken:[['Does','auxiliar'],['she','sujeito'],['work','verbo principal'],['here','complemento']],
  ptComparison:'Em português, geralmente só existe um verbo mesmo — é por isso que separar os dois em inglês pode confundir.',
  commonError:'Achar que o auxiliar é o verbo principal e tentar traduzi-lo com significado próprio.',
  transform:{ afirmativa:'', negativa:'', pergunta:'Did you call your mom?', resposta:'' },
  mini:{ prompt:'Aponte o verbo principal: "Did you call your mom?"', answer:'call' },
  extra:{ prompt:'Aponte: "I haven\'t finished the report."', answer:'finished' },
  listening:null },

{ id:'d19', topic:'grammarfoundations', title:'O que é verbo auxiliar?',
  question:'E o auxiliar, o que ele realmente faz?',
  shortAnswer:'É a palavra que organiza a estrutura da frase (pergunta, negativa, tempo) sem, na maioria das vezes, ter significado próprio.',
  logicPt:'O auxiliar "empresta" a posição gramatical que o verbo principal não pode ocupar sozinho em perguntas/negativas.',
  technical:'Auxiliares mais comuns: do/does/did (Present/Past Simple), have/has/had (perfeito), am/is/are/was/were (contínuo e voz passiva).',
  metaphor:'O auxiliar é o "crachá de acesso" que libera a pergunta ou a negativa.',
  broken:[['Do','auxiliar'],['you','sujeito'],['like','verbo principal'],['pizza','complemento']],
  ptComparison:'Português não tem essa peça separada — por isso ela é a mais estranha para brasileiros.',
  commonError:'Tentar traduzir o auxiliar palavra por palavra, mesmo quando ele não carrega significado.',
  transform:{ afirmativa:'', negativa:'', pergunta:'Does she travel often?', resposta:'' },
  mini:{ prompt:'Identifique o auxiliar: "Does she travel often?"', answer:'does' },
  extra:{ prompt:'Identifique: "Have you seen this movie?"', answer:'have' },
  listening:null },

{ id:'d20', topic:'grammarfoundations', title:'O que é complemento?',
  question:'E o resto da frase, depois do verbo, é tudo "complemento"?',
  shortAnswer:'Sim — é tudo que completa o sentido da ação: objeto, lugar, tempo, modo.',
  logicPt:'Pergunte: o que vem depois do verbo e completa a informação da frase?',
  technical:'Complemento = objeto direto/indireto, advérbio, ou qualquer termo que complete o predicado.',
  metaphor:'Se o verbo é a ação, o complemento é "os detalhes da cena" (onde, quando, com quem, o quê).',
  broken:[['She','sujeito'],['works','verbo'],['in marketing','complemento de área'],['at a startup','complemento de lugar']],
  ptComparison:'Praticamente igual em português: "Ela trabalha em marketing numa startup" segue a mesma lógica de complementos.',
  commonError:'Confundir complemento com sujeito em frases mais longas ("In the morning, she works." — "in the morning" é complemento de tempo, não sujeito).',
  transform:{ afirmativa:'I study English at home every day.', negativa:'', pergunta:'', resposta:'' },
  mini:{ prompt:'Aponte o(s) complemento(s): "I study English at home every day."', answer:'English / at home / every day' },
  extra:{ prompt:'Aponte: "They traveled to Italy last summer."', answer:'to Italy / last summer' },
  listening:null },

{ id:'d21', topic:'grammarfoundations', title:'Como identificar a função de uma palavra antes de tentar traduzi-la?',
  question:'Antes de traduzir, como eu sei se a palavra é auxiliar, verbo principal, etc.?',
  shortAnswer:'Primeiro pergunte "que trabalho essa palavra está fazendo na frase" — só depois pergunte "o que ela significa".',
  logicPt:'Ordem de raciocínio: (1) qual é o verbo principal? (2) existe um auxiliar do lado? (3) o resto é complemento?',
  technical:'Análise sintática básica antes da tradução lexical evita o erro de tentar traduzir palavra por palavra.',
  metaphor:'Primeiro monte o esqueleto da frase (função), depois vista a roupa (significado).',
  broken:[['Have','auxiliar'],['you','sujeito'],['worked','verbo principal'],['here','complemento']],
  ptComparison:'Em português, como a estrutura é mais parecida com a tradução literal, esse passo intermediário costuma ser pulado — mas em inglês ele é essencial.',
  commonError:'Traduzir "have" automaticamente como "ter" mesmo quando ele é auxiliar.',
  transform:{ afirmativa:'', negativa:'', pergunta:'Does she manage the team?', resposta:'' },
  mini:{ prompt:'Em "Does she manage the team?", ache primeiro o verbo principal, depois o auxiliar, depois o sujeito.', answer:'manage (principal) · does (auxiliar) · she (sujeito)' },
  extra:{ prompt:'Aplique a ordem em: "Did you send the email?"', answer:'send (principal) · did (auxiliar) · you (sujeito)' },
  listening:null },

{ id:'d22', topic:'grammarfoundations', title:'Por que eu entendo as palavras isoladamente, mas travo ao montar a frase?',
  question:'Eu sei o significado de cada palavra, mas não consigo juntar tudo na ordem certa — por quê?',
  shortAnswer:'Porque vocabulário e estrutura são habilidades diferentes: saber o que uma palavra significa não ensina automaticamente onde ela vai na frase.',
  logicPt:'Isso é comum para quem aprendeu muito por leitura/contexto — absorve significado, mas não necessariamente a ordem de produção.',
  technical:'A solução não é aprender mais palavras, é praticar a ORDEM fixa das peças (sujeito → auxiliar → verbo → complemento) até virar automático.',
  metaphor:'Você já tem todas as peças do LEGO — o que falta é o manual de montagem, não peças novas.',
  broken:[['sujeito','1º'],['auxiliar','2º'],['verbo','3º'],['complemento','4º']],
  ptComparison:'Em português, a ordem das peças já é automática para você; em inglês, esse automatismo ainda está em construção.',
  commonError:'Tentar resolver isso estudando mais vocabulário, em vez de praticar montagem de frases.',
  transform:{ afirmativa:'', negativa:'', pergunta:'', resposta:'' },
  mini:{ prompt:'Card conceitual: revisite o Laboratório de Frases diariamente, por poucos minutos.', answer:'Sem resposta certa/errada — é um lembrete de prática.' },
  extra:{ prompt:'Escreva com suas palavras: por que ordem e vocabulário são coisas diferentes?', answer:'Use o campo "Minha explicação com minhas palavras" abaixo.' },
  listening:null },

{ id:'d23', topic:'grammarfoundations', title:'Como transformar uma afirmativa em negativa e depois em pergunta?',
  question:'Existe um passo a passo fixo para transformar a frase?',
  shortAnswer:'Sim: (1) identifique o auxiliar ou to be; (2) para negativa, acrescente "not" logo depois dele; (3) para pergunta, mova esse mesmo elemento para o início.',
  logicPt:'O "elemento que se move" é sempre o mesmo: to be, auxiliar (do/does/did/have) ou modal — nunca o verbo principal.',
  technical:'Afirmativa → localizar auxiliar/to be → Negativa = auxiliar + not + verbo base → Pergunta = auxiliar + sujeito + verbo base.',
  metaphor:'O auxiliar é uma peça móvel — fica no meio na afirmativa, ganha um "not" do lado na negativa, e pula pro início na pergunta.',
  broken:[['She','sujeito'],['works','verbo'],['here','complemento']],
  ptComparison:'Em português, a negativa é mais simples (só "não" antes do verbo), e a pergunta muda só a entonação — por isso o inglês parece ter "passos extras".',
  commonError:'Esquecer de voltar o verbo principal para a forma base ao negar/perguntar ("She doesn\'t works here.")',
  transform:{ afirmativa:'She works here.', negativa:"She doesn't work here.", pergunta:'Does she work here?', resposta:'' },
  mini:{ prompt:'Pratique: "They travel a lot." → negativa → pergunta.', answer:"They don't travel a lot. / Do they travel a lot?" },
  extra:{ prompt:'Pratique: "He has a car." → negativa → pergunta (have aqui é posse).', answer:"He doesn't have a car. / Does he have a car?" },
  listening:null },

{ id:'d24', topic:'grammarfoundations', title:'Como saber qual palavra carrega o presente, a terceira pessoa e o passado?',
  question:'Cada tempo/pessoa "mora" em uma palavra diferente — como eu identifico qual?',
  shortAnswer:'Presente (I/you/we/they): mora no próprio verbo. Terceira pessoa (he/she/it): mora no -s/-es/-ies (afirmativa) ou no "does". Passado: mora no -ed/irregular (afirmativa) ou no "did".',
  logicPt:'Regra visual: só UM lugar por frase pode carregar a marca de tempo/pessoa — nunca dois ao mesmo tempo.',
  technical:'Presente afirmativa = verbo puro (ou +s na 3ª pessoa); presente pergunta = do/does + verbo base; passado afirmativa = verbo+ed/irregular; passado pergunta = did + verbo base.',
  metaphor:'É como uma "bagagem" — ou o verbo carrega a mala do tempo, ou o auxiliar carrega por ele, nunca os dois com bagagem ao mesmo tempo.',
  broken:[['She','sujeito'],['works','verbo + s, 3ª pessoa'],['here','complemento']],
  ptComparison:'Português marca tudo direto no verbo (trabalha/trabalhou) sem precisar de auxiliar — por isso esse "revezamento" é a parte mais estranha do inglês para brasileiros.',
  commonError:'Marcar tempo/pessoa duas vezes: "Does she works?", "Did she worked?"',
  transform:{ afirmativa:'He plays tennis. / He played tennis.', negativa:'', pergunta:'Does he play tennis? / Did he play tennis?', resposta:'' },
  mini:{ prompt:'Identifique onde está a marca: "He plays tennis." vs. "Does he play tennis?"', answer:'No verbo (-s) / no does' },
  extra:{ prompt:'Identifique: "They visited Rome." vs. "Did they visit Rome?"', answer:'No verbo (-ed) / no did' },
  listening:null }
];

// ---------- Explicações alternativas ("Explique de outro jeito") — Seção E ----------
export const ALT_EXPLANATIONS = {
  dodoesdid: [
    { label:'Metáfora visual', text:'Do/does/did são o "crachá de acesso" que a frase precisa mostrar para virar pergunta ou negativa — sem crachá, não entra.' },
    { label:'Comparação com português', text:'Em português a pergunta muda só a entonação da voz ("Você trabalha aqui?"); em inglês, essa "mudança" precisa aparecer fisicamente como uma palavra (do/does/did).' },
    { label:'Engenharia da frase', text:'Toda frase tem um "slot" fixo logo depois do sujeito reservado para marcar tempo+pessoa. No presente, o slot é preenchido pelo verbo (afirmativa) ou por do/does (pergunta/negativa). No passado, por -ed (afirmativa) ou did (pergunta/negativa). Nunca os dois ao mesmo tempo.' }
  ],
  whwords: [
    { label:'Metáfora visual', text:'A WH-word é uma etiqueta colada na frente da caixa, dizendo que tipo de resposta está faltando (lugar, tempo, pessoa...) antes mesmo de abrir a caixa.' },
    { label:'Comparação com português', text:'"Onde", "quando", "por que" também vêm no início da pergunta em português — o que muda é que o inglês ainda exige o auxiliar (do/does/did ou to be) depois da WH-word.' },
    { label:'Engenharia da frase', text:'WH-word ocupa sempre a posição 1 da frase; ela não altera nada da estrutura de pergunta que vem depois — é só um "prefixo" que se soma à estrutura comum (auxiliar+sujeito+verbo).' }
  ],
  tobe: [
    { label:'Metáfora visual', text:'To be é o único verbo que "abre a própria porta" — não bate na casa de do/does/did pedindo carona.' },
    { label:'Comparação com português', text:'"És tu o responsável?" (embora raro) mostra que em português o verbo "ser" também pode se mover sozinho para o início — o inglês faz isso o tempo todo, não só em registros formais.' },
    { label:'Engenharia da frase', text:'Am/is/are/was/were carregam sozinhos tempo+pessoa; por isso, na pergunta, eles simplesmente trocam de posição com o sujeito, sem precisar de nenhuma peça auxiliar extra.' }
  ],
  have: [
    { label:'Metáfora visual', text:'"Have" tem dois uniformes — de dono de objeto (posse) e de carregador de experiência (auxiliar). O uniforme muda dependendo do que vem depois dele.' },
    { label:'Comparação com português', text:'"Eu tenho um carro" (posse) e "eu tenho trabalhado muito" (auxiliar) — os dois "tenho" existem em português também, com a mesma divisão de papéis.' },
    { label:'Engenharia da frase', text:'Have/has + substantivo = posse (comporta-se como verbo comum, pede do/does para perguntar). Have/has + particípio = auxiliar de tempo perfeito (comporta-se como to be, vai sozinho para o início da pergunta).' }
  ],
  modais: [
    { label:'Metáfora visual', text:'Os modais são "primos" do to be — da mesma família "folgada", não pedem ajuda a do/does/did.' },
    { label:'Comparação com português', text:'"Você pode", "você deveria", "você poderia" também vão para o início da pergunta em português sem precisar de um "faz" extra — aqui o paralelo com o inglês é direto.' },
    { label:'Engenharia da frase', text:'Modal + sujeito + verbo BASE + complemento — o modal ocupa a posição que do/does/did ocupariam, então nunca aparecem juntos na mesma frase.' }
  ],
  toing: [
    { label:'Metáfora visual', text:'"To+verbo" é o verbo em roupa de trabalho (ação/propósito); "verbo-ing" é o verbo em roupa de festa (substantivo, usado depois de preposições ou em ações contínuas).' },
    { label:'Comparação com português', text:'O infinitivo em português ("para ler") e o gerúndio ("lendo") também mudam de contexto de uso — mas as regras não coincidem exatamente com o inglês, por isso vale sempre conferir a regra específica (ex.: depois de preposição, é sempre -ing).' },
    { label:'Engenharia da frase', text:'Regra fixa e sem exceção: depois de qualquer preposição (into, about, of, for...), o verbo SEMPRE vai de -ing. Depois de certos verbos (want, need, decide), vai de to+infinitivo. Depois de outros (enjoy, avoid, keep), vai sempre de -ing, mesmo sem preposição.' }
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
        affirmative:'You watched the new episode.', negative:"You didn't watch the new episode.", question:'Did you watch the new episode?', shortAnswer:'Yes, I did. / No, I didn\'t.',
        ptComparison:'Não existe estrutura parecida — em português a pergunta no passado só muda a entonação.',
        commonError:'"Did you watched the new episode?" — o verbo NÃO pode ficar no passado depois do did.',
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

// ---------- Printables — redesign completo (Requisito 3) ----------
// Cada folha é uma página A4. "blocks" é uma lista normalizada de elementos visuais
// (rows/flow/columns/items/grid/answerGroups/note) que o template percorre de forma
// genérica — assim toda folha nova só precisa de dados, não de markup novo.
// accent referencia uma cor da paleta berries & clouds (var(--<accent>)).
export const PRINTABLES = [
  { id:'f1', accent:'vinho', kindLabel:'Consulta rápida', title:'Estrutura da Frase', subtitle:'Os 4 moldes que toda frase em inglês segue',
    blocks:[
      { t:'rows', heading:'Afirmação', rows:[{label:'Sujeito + Verbo + Complemento', example:'She works here.'}] },
      { t:'rows', heading:'Negação (to be)', rows:[{label:'Sujeito + To Be + not + Complemento', example:'She is not tired.'}] },
      { t:'rows', heading:'Negação (outros verbos)', rows:[{label:'Sujeito + Do/Does/Did + not + Verbo', example:'She does not work here.'}] },
      { t:'rows', heading:'Pergunta', rows:[{label:'(Auxiliar/To Be) + Sujeito + Verbo + Complemento?', example:'Does she work here?'}] },
      { t:'flow', steps:['Sujeito','Auxiliar / To Be','Verbo','Complemento'] }
    ] },

  { id:'f2', accent:'periwinkle', kindLabel:'Consulta rápida', title:'To Be × Outros Verbos', subtitle:'Quem é "folgado" e quem é "tímido"',
    blocks:[
      { t:'columns',
        left:{ title:'TO BE — "folgado"', note:'Vai sozinho para o início da pergunta.', rows:[
          {tag:'Afirmativa', text:'She is tired.'},{tag:'Negativa', text:"She isn't tired."},{tag:'Pergunta', text:'Is she tired?'}
        ]},
        right:{ title:'OUTROS VERBOS — "tímidos"', note:'Precisam de do/does/did.', rows:[
          {tag:'Afirmativa', text:'She works here.'},{tag:'Negativa', text:"She doesn't work here."},{tag:'Pergunta', text:'Does she work here?'}
        ]} }
    ] },

  { id:'f3', accent:'berry', kindLabel:'Consulta rápida', title:'Do / Does / Did', subtitle:'Quando usar cada um',
    blocks:[
      { t:'rows', heading:'DO', rows:[{label:'I / you / we / they, presente', example:'Do you like it?'}] },
      { t:'rows', heading:'DOES', rows:[{label:'he / she / it, presente (verbo perde o -s)', example:'Does she work here?'}] },
      { t:'rows', heading:'DID', rows:[{label:'qualquer sujeito, passado — verbo volta à forma base', example:'Did you watch the new episode?'}] },
      { t:'note', text:'🕵️ "Ladrão do passado": quando did aparece, ele rouba o passado só para si — o verbo principal nunca leva -ed.' },
      { t:'flow', steps:['Presente → do / does','Passado → did (sempre + verbo base)'] }
    ] },

  { id:'f4', accent:'skyblue', kindLabel:'Consulta rápida', title:'WH-words', subtitle:'Qual informação cada uma busca',
    blocks:[ { t:'grid' } ] },

  { id:'f5', accent:'vinho', kindLabel:'Prática', title:'Pratique: Do / Does / Did', subtitle:'Complete os espaços — escreva à mão',
    blocks:[ { t:'items', items:[
      {n:1, prompt:'What ___ you do?'}, {n:2, prompt:'___ she work here?'},
      {n:3, prompt:'She ___ have a car. (negativa)'}, {n:4, prompt:'___ you have a car?'},
      {n:5, prompt:'___ you watch the new episode? (passado)'}, {n:6, prompt:'Did you ___ the new episode? (watch, forma base)'},
      {n:7, prompt:'They ___ travel much. (negativa)'}, {n:8, prompt:'___ he play tennis?'}
    ] } ] },

  { id:'f6', accent:'periwinkle', kindLabel:'Prática', title:'Pratique: WH-words', subtitle:'Complete com a WH-word certa',
    blocks:[ { t:'items', items:[
      {n:1, prompt:'___ do you do?'}, {n:2, prompt:'___ do you work?'}, {n:3, prompt:'___ did you start this job?'},
      {n:4, prompt:'___ do you report to?'}, {n:5, prompt:'___ do you want this job?'}, {n:6, prompt:'___ tool do you prefer?'},
      {n:7, prompt:'___ idea was this campaign?'}, {n:8, prompt:'___ do you handle deadlines?'}
    ] } ] },

  { id:'f7', accent:'berry', kindLabel:'Gabarito', title:'Folha de Respostas', subtitle:'Confira as folhas de prática (F5 e F6)',
    blocks:[ { t:'answerGroups', groups:[
      { sheet:'F5 — Pratique: Do / Does / Did', answers:['1. do','2. Does',"3. doesn't",'4. Do','5. Did','6. watch',"7. don't",'8. Does'] },
      { sheet:'F6 — Pratique: WH-words', answers:['1. What','2. Where','3. When','4. Who','5. Why','6. Which','7. Whose','8. How'] }
    ] } ] },

  { id:'f8', accent:'pink', kindLabel:'Consulta rápida', title:'10 Verbos Comuns', subtitle:'Afirmativa, pergunta no presente e no passado',
    blocks:[
      { t:'rows', heading:'Afirmativa (she/he)', rows:[
        {label:'have', example:'has'},{label:'want', example:'wants'},{label:'know', example:'knows'},{label:'go', example:'goes'},{label:'like', example:'likes'},
        {label:'see', example:'sees'},{label:'eat', example:'eats'},{label:'need', example:'needs'},{label:'work', example:'works'},{label:'speak', example:'speaks'}
      ] },
      { t:'rows', heading:'Pergunta no presente (does she ___?)', rows:[
        {label:'have', example:'want'},{label:'know', example:'go'},{label:'like', example:'see'},{label:'eat', example:'need'},{label:'work', example:'speak'}
      ] },
      { t:'rows', heading:'Pergunta no passado (did she ___?)', rows:[
        {label:'have', example:'want'},{label:'know', example:'go'},{label:'like', example:'see'},{label:'eat', example:'need'},{label:'work', example:'speak'}
      ] }
    ] },

  { id:'f9', accent:'cloud', kindLabel:'Consulta rápida', title:'Expressões Comuns', subtitle:'Quantificadores, conectores e expressões com verbo',
    blocks:[
      { t:'rows', heading:'Quantificadores', rows:[
        {label:'kind of / sort of / type of', example:'mais ou menos, tipo assim'},
        {label:'a lot of', example:'muito / bastante'},
        {label:'a couple of', example:'um par de, alguns'},
        {label:'a few / a little', example:'poucos / pouco'}
      ] },
      { t:'rows', heading:'Conectores', rows:[
        {label:'actually', example:'na verdade'},
        {label:'by the way', example:'a propósito'},
        {label:'in fact', example:'de fato'}
      ] },
      { t:'rows', heading:'Expressões com verbo', rows:[
        {label:'get used to', example:'acostumar-se com'},
        {label:'take care of', example:'cuidar de'},
        {label:'look forward to', example:'esperar ansiosamente por'},
        {label:'in charge of', example:'responsável por'},
        {label:'make sense', example:'fazer sentido'}
      ] }
    ] },

  { id:'f10', accent:'skyblue', kindLabel:'Consulta rápida', title:'Respostas Essenciais para Entrevista', subtitle:'Só o esqueleto de cada frase — preencha com seus dados',
    blocks:[ { t:'items', items: INTERVIEW_BLOCKS.map((b)=>({ n:b.id, prompt:b.structure })) } ] },

  { id:'f11', accent:'vinho', kindLabel:'Consulta rápida', title:'Uma Palavra, Dois Trabalhos', subtitle:'A mesma palavra muda de função dependendo do contexto',
    blocks:[
      { t:'columns', left:{ title:'DO — verbo principal', note:'"fazer"', rows:[{tag:'Exemplo', text:'I do my homework.'}] },
        right:{ title:'DO — auxiliar', note:'organiza pergunta/negativa', rows:[{tag:'Exemplo', text:'Do you like it?'}] } },
      { t:'columns', left:{ title:'HAVE — posse', note:'"ter"', rows:[{tag:'Exemplo', text:'I have a car.'}] },
        right:{ title:'HAVE — auxiliar', note:'tempo perfeito', rows:[{tag:'Exemplo', text:'I have worked here.'}] } },
      { t:'columns', left:{ title:'BE — verbo principal', note:'"ser/estar"', rows:[{tag:'Exemplo', text:'She is a teacher.'}] },
        right:{ title:'BE — auxiliar', note:'contínuo', rows:[{tag:'Exemplo', text:'She is working now.'}] } },
      { t:'columns', left:{ title:'CAN — significado', note:'capacidade', rows:[{tag:'Exemplo', text:'I can speak English.'}] },
        right:{ title:'CAN — função modal', note:'nunca usa do/does', rows:[{tag:'Exemplo', text:'Can you help me?'}] } }
    ] },

  { id:'f12', accent:'periwinkle', kindLabel:'Consulta rápida', title:'Quem Carrega a Informação?', subtitle:'Cada tempo/função "mora" em um lugar fixo da frase',
    blocks:[ { t:'rows', heading:'', rows:[
      {label:'Pergunta no presente', example:'do / does'},
      {label:'Pergunta no passado', example:'did'},
      {label:'Terceira pessoa afirmativa', example:'verbo + s/es/ies'},
      {label:'Passado afirmativo regular', example:'verbo + ed'},
      {label:'Capacidade', example:'can'},
      {label:'Conselho', example:'should'},
      {label:'Hipótese/polidez', example:'would'},
      {label:'Estado/identidade', example:'be'},
      {label:'Experiência/resultado', example:'have + particípio'}
    ] } ] },

  { id:'f13', accent:'berry', kindLabel:'Consulta rápida', title:'O Mapa de "What do you do?"', subtitle:'A pergunta mais confusa do toolkit, peça por peça',
    blocks:[
      { t:'flow', steps:['What','do','you','do','in Recife?'] },
      { t:'rows', heading:'Cada peça', rows:[
        {label:'informação', example:'What'},{label:'auxiliar', example:'do'},{label:'sujeito', example:'you'},
        {label:'verbo principal', example:'do'},{label:'complemento', example:'in Recife'}
      ] },
      { t:'note', text:'Os dois "do" têm funções diferentes: o primeiro só organiza a pergunta; o segundo é o verbo de verdade ("fazer/atuar como").' }
    ] },

  { id:'f14', accent:'cloud', kindLabel:'Consulta rápida', title:'WH-word Não Substitui Auxiliar', subtitle:'O "do" continua ali em todas as versões',
    blocks:[ { t:'rows', heading:'Comparação', rows:[
      {label:'Base', example:'Do you work remotely?'},
      {label:'+ lugar', example:'Where do you work?'},
      {label:'+ motivo', example:'Why do you work remotely?'},
      {label:'+ o que faz', example:'What do you do?'}
    ] },
    { t:'note', text:'Repare que o "do" se repete em todas — a WH-word só se soma à estrutura, nunca a substitui.' } ] }
];

// ---------- Critérios de progresso (Requisito 1) ----------
// Lista única, por tópico, das atividades "essenciais". Um tópico só chega a "Dominado"
// quando TODAS as atividades daqui foram tentadas e pelo menos 75% delas foram acertadas.
export const ESSENTIAL_ACTIVITIES = {
  greetings: PRACTICE_TOPICS.greetings.drills.map((d)=>d.id),
  tobe: PRACTICE_TOPICS.tobe.drills.map((d)=>d.id),
  personalinfo: PRACTICE_TOPICS.personalinfo.drills.map((d)=>d.id),
  smalltalk: PRACTICE_TOPICS.smalltalk.drills.map((d)=>d.id),
  likes: PRACTICE_TOPICS.likes.drills.map((d)=>d.id),
  dodoesdid: MICROLESSONS.filter((m)=>m.topic==='dodoesdid').map((m)=>m.id),
  whwords: WH_WORDS.map((w)=>w.word),
  interview: INTERVIEW_BLOCKS.map((b)=>'iv'+b.id)
};

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
