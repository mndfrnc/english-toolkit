# English Toolkit — Amanda
## Conteúdo estruturado para o Claude Design (GitHub Pages) — v2 (revisado)

> **Nota de leitura para o Claude Design:** este arquivo tem duas camadas. Os Módulos 1 a 12 (do início até "ENTREGA ESPERADA") são a base estrutural. As Seções A a I, que vêm depois, **revisam e têm prioridade** sobre a base sempre que houver conflito — em especial: (1) a Seção A substitui os dados profissionais do Módulo 6 (Bloco 1, 2, 3, 5 e 6); (2) a Seção B é um módulo novo e prioritário na Home; (3) a Seção I substitui a lista de entrega do final do Módulo 12. Use a base para estrutura geral e as seções revisadas como fonte final de conteúdo onde houver sobreposição.

> Este arquivo contém o CONTEÚDO já pronto, organizado por módulo, para anexar ao Claude Design junto com o header e o background. O Design decide o layout/visual; este documento decide o que vai em cada tela.

**Legenda de etiquetas usadas em todo o conteúdo:**
- `[FLUENCYPASS]` = conteúdo oficial do curso, sem alterações.
- `[TUTOR]` = complemento criado para explicar o porquê (não substitui o oficial).
- `[🔭 ANTECIPA]` = tópico que aparece formalmente mais adiante no curso; aqui é só uma prévia funcional.
- `[🎯 ENTREVISTA]` = conteúdo com foco específico em processos seletivos.
- `[REAL]` = confirmado nos arquivos da aluna. `[EDITÁVEL]` = modelo/estrutura, sem dado inventado — a aluna preenche.

---

## 1. PÁGINA INICIAL (Home)

**Título da página:** English Toolkit — Amanda

**Subtítulo:** Do vocabulário à frase: montando o inglês peça por peça.

**Bloco de progresso (dados dinâmicos, ligados ao localStorage):**

- Barra ou contador: X de 8 tópicos dominados.
- Categorias visuais (pills/badges):
  - 🟢 Dominado
  - 🟡 Em revisão
  - ⚪ Ainda não estudado
- Lista dos 8 tópicos-base (os mesmos IDs usados no restante do site, para status bater em todo lugar):
  1. `greetings` — Cumprimentos e apresentação pessoal
  2. `tobe` — Verbo To Be (afirmativa/negativa/pergunta)
  3. `personalinfo` — Dados pessoais (soletração, telefone, endereço)
  4. `smalltalk` — Small talk e perguntas abertas
  5. `likes` — Like/love/hate + gerúndio vs. to+infinitivo
  6. `dodoesdid` — Auxiliares Do/Does/Did
  7. `whwords` — WH-words
  8. `interview` — Inglês para entrevistas

**Botão principal:** "Continuar de onde parei" → deve levar para o último módulo visitado (salvo em `localStorage.lastSection`).

**Acessos rápidos (3 cards/botões):**
- 🎯 Entrevistas de Emprego → vai para a seção Interview.
- 🧩 Montando a Frase → vai para o Laboratório de Frases.
- 🧠 Auxiliares e Modais → vai para a seção de Auxiliares.

**Texto de abertura (curto, sem tom motivacional genérico):**
> "Este é o seu painel de estudo. Ele não substitui o curso — ele organiza o que você já viu e testa se realmente colou. Comece por onde parou ou escolha um módulo abaixo."

---

## 2. MAPA PROGRESSIVO DO CURSO

Organizar como uma linha do tempo ou 5 colunas/cards, uma por Unit. Cada item dentro de cada Unit deve exibir sua etiqueta.

### Unit 1 — Hello, Stranger! `[status: já estudada — base do Livro Complementar]`
- Cumprimentos formais e informais `[FLUENCYPASS]`
- Apresentação pessoal (nome, idade, origem, profissão) `[FLUENCYPASS]`
- Verbo To Be — afirmativa, negativa, pergunta `[FLUENCYPASS]`
- Dados pessoais: soletração, telefone, e-mail, endereço `[FLUENCYPASS]`
- Small talk e perguntas abertas `[FLUENCYPASS]`
- Like / Love / Hate + verbo-ing vs. to+verbo `[FLUENCYPASS]`
- Auxiliar `do` em perguntas ("What do you go by?", "What do you do?") `[TUTOR]` — antecipação pontual, sem aprofundar
- Nacionalidades e perguntas WH `[FLUENCYPASS]`

### Unit 2 — Time Flies... `[🔭 ANTECIPA]`
- Perguntar e dizer as horas (o'clock, past, to) `[FLUENCYPASS — Unit 2]`
- Dias da semana e meses (maiúscula obrigatória) `[FLUENCYPASS — Unit 2]`
- Estações do ano `[FLUENCYPASS — Unit 2]`
- Números por extenso e arredondamento de horas `[FLUENCYPASS — Unit 2]`

### Unit 3 — Every Day! `[🔭 ANTECIPA — é onde do/does/did vira oficial]`
- Present Simple: estrutura afirmativa (S + verbo + complemento; -s/-es/-ies na 3ª pessoa) `[FLUENCYPASS — Unit 3]`
- Present Simple negativo: don't / doesn't + verbo no infinitivo `[FLUENCYPASS — Unit 3]`
- Present Simple interrogativo: Do / Does + sujeito + verbo `[FLUENCYPASS — Unit 3]`
- Advérbios de frequência (always, usually, often, sometimes, hardly ever, never) e sua posição na frase `[FLUENCYPASS — Unit 3]`
- **Nota do Tutor:** o módulo "Auxiliares Do/Does/Did" deste toolkit já adianta boa parte disso — quando você chegar oficialmente na Unit 3, vai reconhecer a estrutura, só ganhará o nome técnico completo e mais prática.

### Unit 4 — Smart Cookie! `[🔭 ANTECIPA]`
- There is / There are — existência de algo (equivalente a "há/existe") `[FLUENCYPASS — Unit 4]`
- Estrutura afirmativa, negativa (isn't/aren't) e pergunta (Is there/Are there) `[FLUENCYPASS — Unit 4]`
- Adjetivos descritivos (new, old, beautiful, expensive, noisy, awesome...) `[FLUENCYPASS — Unit 4]`
- Vocabulário de lugares na cidade (bakery, park, bus stop, mall, bar...) `[FLUENCYPASS — Unit 4]`
- **Atenção:** o curso avisa explicitamente para nunca usar "have" para dizer que algo existe (❌ "Have a cat on the street").

### Unit 5 — Roll Up Your Sleeves! `[🔭 ANTECIPA]`
- Substantivos contáveis vs. incontáveis `[FLUENCYPASS — Unit 5]`
- Uso de "some" e "any" com incontáveis `[FLUENCYPASS — Unit 5]`
- How much (incontáveis) x How many (contáveis) `[FLUENCYPASS — Unit 5]`
- Partes do corpo humano `[FLUENCYPASS — Unit 5]`

**Instrução de exibição:** cada bloco de Unit deve poder expandir/recolher (accordion), para não virar parede de texto. Units 2 a 5 já vêm recolhidas por padrão, com a etiqueta 🔭 visível mesmo fechadas.
## 3. LABORATÓRIO "MONTANDO A FRASE" `[TUTOR]`

Módulo central do toolkit. Para cada frase abaixo, a página deve:
1. Mostrar a frase completa em destaque.
2. Quebrar em blocos clicáveis (cada bloco = uma peça). Ao clicar, mostrar a função da peça (tooltip ou expansão).
3. Ter botões: **Afirmativa / Negativa / Pergunta** e, quando aplicável, **Presente / Passado**.
4. Ter um seletor de sujeito (I / You / He / She / We / They) que recalcula a frase automaticamente (ver regra de conjugação abaixo).
5. Ter um botão "🔊 Ouvir" (Web Speech API, `lang="en-US"`) — ver nota técnica no fim deste arquivo.
6. Mostrar a tradução (ocultável/mostrável, não vir aberta por padrão).

**Regra de conjugação a implementar (para o seletor de sujeito funcionar em todas as frases com do/does):**
- Sujeito He/She/It → auxiliar `does` (presente) / `did` (passado); verbo principal SEM -s (ex.: does he **work**, not works).
- Sujeito I/You/We/They → auxiliar `do` (presente) / `did` (passado); verbo principal na forma base.
- Na afirmativa (sem auxiliar visível): He/She/It → verbo + s/es/ies; demais sujeitos → verbo na forma base.
- Regra de -s/-es/-ies: verbos terminados em ss/sh/ch/x/o → +es; terminados em consoante+y → tira o y, põe -ies; demais → +s.

---

### Frase 1 — Trabalho remoto / entrevista
**Base:** `Do you work remotely?`
- Peças: `Do` (auxiliar) · `you` (sujeito) · `work` (verbo principal) · `remotely` (complemento/advérbio)
- Afirmativa: `You work remotely.`
- Negativa: `You don't work remotely.`
- Pergunta (passado): `Did you work remotely?`
- Tradução: "Você trabalha remotamente?"
- Contexto: `[🎯 ENTREVISTA]` / trabalho remoto

### Frase 2 — Marketing
**Base:** `She works with marketing campaigns.`
- Peças: `She` (sujeito) · `works` (verbo principal, 3ª pessoa +s) · `with marketing campaigns` (complemento)
- Pergunta: `Does she work with marketing campaigns?`
- Negativa: `She doesn't work with marketing campaigns.`
- Passado: `Did she work with marketing campaigns?`
- Tradução: "Ela trabalha com campanhas de marketing."
- Contexto: marketing / `[🎯 ENTREVISTA]`

### Frase 3 — Customer Success / atendimento
**Base:** `What do you like about customer service?`
- Peças: `What` (WH-word, pede coisa/informação) · `do` (auxiliar) · `you` (sujeito) · `like` (verbo principal) · `about customer service` (complemento)
- Resposta-modelo: `I like helping people solve their problems quickly.`
- Tradução: "O que você gosta no atendimento ao cliente?"
- Contexto: customer success / `[🎯 ENTREVISTA]`

### Frase 4 — Inteligência artificial
**Base:** `Are you into AI tools?`
- Peças: `Are` (verbo to be, "folgado", vai para o início sozinho) · `you` (sujeito) · `into AI tools` (complemento com preposição)
- Afirmativa: `You are into AI tools.`
- Negativa: `You aren't into AI tools.`
- Nota: depois de "into" o verbo seguinte (se houver) É SEMPRE -ing — ex.: `I'm into using AI tools every day.`
- Tradução: "Você é fã de ferramentas de IA?"
- Contexto: inteligência artificial

### Frase 5 — Viagens / Itália
**Base:** `Did you travel to Italy last year?`
- Peças: `Did` (auxiliar de passado, "ladrão" — rouba o passado do verbo principal) · `you` (sujeito) · `travel` (verbo principal, forma base, SEM -ed porque o did já carrega o passado) · `to Italy` (complemento de lugar) · `last year` (marcador de tempo)
- Afirmativa: `You traveled to Italy last year.`
- Negativa: `You didn't travel to Italy last year.`
- 🚫 Erro comum a destacar: `Did you traveled...` (verbo não pode ficar no passado depois de did).
- Tradução: "Você viajou para a Itália ano passado?"
- Contexto: viagens / Itália

### Frase 6 — Séries (lazer)
**Base:** `I'm into binge-watching Friends after work.`
- Peças: `I'm` (sujeito + to be) · `into` (preposição fixa) · `binge-watching` (verbo -ing, obrigatório após preposição) · `Friends` (complemento) · `after work` (marcador de tempo)
- Pergunta: `Are you into binge-watching Friends after work?`
- Tradução: "Eu curto maratonar Friends depois do trabalho."
- Contexto: séries / lazer

### Frase 7 — Entrevista / experiência
**Base:** `What do you do?`
- Peças: `What` (WH-word) · `do` (auxiliar) · `you` (sujeito) · `do` (verbo principal, significa "fazer/atuar como") — destacar que o "do" aparece duas vezes com funções diferentes.
- Resposta-modelo: `I work in marketing and customer success.`
- Tradução: "O que você faz (da vida)?"
- Contexto: `[🎯 ENTREVISTA]`

---

### Nota técnica sobre áudio
Recomendação para o Claude Design: usar a **Web Speech API do navegador** (`window.speechSynthesis`), sem depender de arquivos de áudio externos — funciona offline, sem servidor, direto no HTML. Se o navegador não suportar, mostrar mensagem simples: "Seu navegador não suporta leitura de voz — funciona melhor no Chrome ou Edge."
## 4. AUXILIARES E MODAIS — POR FUNÇÃO `[TUTOR + base FLUENCYPASS Unit 3]`

**Princípio de organização (repetir no topo do módulo):** não organizar como lista de vocabulário. Organizar como "qual trabalho esta palavra faz nesta frase?". A mesma palavra muda de papel dependendo do contexto — e é isso que confunde.

**Metáforas fixas a manter em todo o módulo** (já validadas com a aluna):
- `do/does` = "ponto de interrogação dentro da frase" — colocam a frase em modo pergunta ou negativa.
- `to be` = "folgado" — nunca pede ajuda, vai sozinho para o início da pergunta.
- Outros verbos = "tímidos" — sempre precisam de do/does (presente) ou did (passado) para perguntar/negar.
- `did` = "ladrão do passado" — quando ele aparece, rouba o passado e o verbo principal volta para a forma base.

---

### GRUPO A — Estrutura da pergunta e negativa: DO / DOES / DID

#### DO
- Significado literal (como verbo principal): "fazer". Ex.: `I do my homework.`
- Função gramatical (como auxiliar): organiza pergunta/negativa no Present Simple para I/you/we/they. Não significa "fazer" aqui.
- Quando mantém significado: quando é o único verbo da frase (`I do the dishes.`).
- Quando é auxiliar: quando aparece ao lado de outro verbo principal (`Do you like it?` — "like" é o verbo principal, "do" só organiza a pergunta).
- Ordem da frase: `Do + sujeito (I/you/we/they) + verbo base + complemento?`
- Afirmativa: `You like it.`
- Negativa: `You don't like it.`
- Pergunta: `Do you like it?`
- Resposta curta: `Yes, I do. / No, I don't.`
- Comparação com português: em português não existe nenhuma palavra equivalente nessa posição — "Você gosta disso?" não tem um "faz" escondido. É por isso que o "do" parece não ter tradução: ele realmente não tem, sua função é 100% estrutural.
- 🚫 Erro comum: esquecer o "do" e falar "You like it?" (existe em inglês falado bem informal, mas soa incompleto/estranho em contextos formais como entrevista).
- Exemplo profissional: `Do you have experience with CRM tools?`
- Exemplo cotidiano: `Do you want coffee?`
- Mini exercício: Complete — "___ you speak English?" (resposta: Do)

#### DOES
- Significado literal: não tem sozinho — é a forma de "do" para he/she/it.
- Função gramatical: mesma função do "do", mas exclusiva para 3ª pessoa do singular (he/she/it) no presente.
- Regra de ouro: quando "does" aparece, o verbo principal PERDE o "-s" (`Does she work here?`, nunca `Does she works here?`).
- Ordem da frase: `Does + he/she/it + verbo base + complemento?`
- Afirmativa: `She works here.`
- Negativa: `She doesn't work here.`
- Pergunta: `Does she work here?`
- Resposta curta: `Yes, she does. / No, she doesn't.`
- Comparação com português: é o mesmo "faz" fantasma do "do", só que reservado para ele/ela/isso.
- 🚫 Erro comum: `Does she works here?` — duplicar a marca de 3ª pessoa (no does E no verbo).
- Exemplo profissional: `Does the company offer remote work?`
- Exemplo cotidiano: `Does he like pizza?`
- Mini exercício: Corrija — "Does he plays tennis?" (resposta: Does he play tennis?)

#### DID
- Significado literal: não tem sozinho — é a forma de passado de "do".
- Função gramatical: organiza pergunta/negativa no passado, para QUALQUER sujeito (I/you/he/she/we/they).
- Regra de ouro ("ladrão do passado"): quando "did" aparece, ele carrega sozinho o passado da frase inteira — o verbo principal volta para a forma base (sem -ed, sem irregularidade).
- Ordem da frase: `Did + sujeito + verbo base + complemento?`
- Afirmativa: `You watched the race.`
- Negativa: `You didn't watch the race.`
- Pergunta: `Did you watch the race?`
- Resposta curta: `Yes, I did. / No, I didn't.`
- Comparação com português: não existe estrutura parecida — em português, a pergunta no passado só muda a entonação ("Você assistiu a corrida?"). Em inglês, "did" precisa aparecer fisicamente na frase.
- 🚫 Erro comum: `Did you watched the race?` — o verbo NÃO pode ficar no passado depois do did.
- Exemplo profissional: `Did you manage a team before?`
- Exemplo cotidiano: `Did you sleep well?`
- Mini exercício: Transforme para pergunta — "She traveled to Italy." (resposta: Did she travel to Italy?)

---

### GRUPO B — O verbo que trabalha sozinho: TO BE (am / is / are / was / were)

- Significado literal: "ser/estar".
- Função gramatical especial: é o único verbo em inglês que NUNCA precisa de do/does/did para perguntar ou negar — ele mesmo pula para o início da pergunta.
- Quando mantém significado pleno: sempre — to be nunca "esvazia" seu sentido como o do/does/did fazem.
- Ordem da frase (pergunta): `Am/Is/Are/Was/Were + sujeito + complemento?`
- Afirmativa: `He is tired. / They were tired.`
- Negativa: `He is not (isn't) tired. / They were not (weren't) tired.`
- Pergunta: `Is he tired? / Were they tired?`
- Resposta curta: `Yes, he is. / No, he isn't.`
- Comparação com português: aqui sim existe paralelo direto — "ele É cansado" muda de posição para "É ele cansado?" (menos comum, mas existe em português mais formal/arcaico: "És tu o responsável?").
- 🚫 Erro comum: adicionar "do" onde já existe "to be" — ❌ `Do you are tired?` — nunca junte os dois.
- Exemplo profissional: `Are you available for a call this week?`
- Exemplo cotidiano: `Is it cold outside?`
- Mini exercício: Corrija — "Do you are ready?" (resposta: Are you ready?)

---

### GRUPO C — Capacidade, possibilidade, conselho e hipótese: CAN / COULD / SHOULD / WOULD `[🔭 ANTECIPA]`

> Nota: estes modais aparecem de forma mais aprofundada em units futuras do curso. Aqui vai só o essencial para não travar em entrevistas.

- **CAN** (capacidade/possibilidade no presente): `I can speak English.` → Pergunta: `Can you speak English?` → Negativa: `I can't speak English.`
- **COULD** (capacidade no passado OU pedido educado): `I could help you yesterday.` / `Could you send me the report?`
- **SHOULD** (conselho/recomendação): `You should practice every day.`
- **WOULD** (hipótese/educação, base do condicional): `I would love to work here.` / `Would you like some coffee?`
- Regra de ouro comum aos quatro: são "folgados" como o to be — nunca precisam de do/does/did. `Can you...? / Could you...? / Should I...? / Would you...?` — o modal já vai sozinho para o início.
- 🚫 Erro comum: `Do you can speak English?` — nunca junte do com modal.
- Exemplo profissional (`[🎯 ENTREVISTA]`): `I would like to learn more about the role.`
- Mini exercício: Complete com o modal certo — "___ you help me with this file, please?" (pedido educado → Could)

---

### GRUPO D — Posse e auxiliar de tempo perfeito: HAVE / HAS / HAD `[🔭 ANTECIPA]`

- Significado literal (verbo principal, posse): "ter". Ex.: `I have a car.`
- Função gramatical (auxiliar, tempos perfeitos): usado com particípio para indicar experiência/resultado. Ex.: `I have worked with CRM tools.` — aqui não significa exatamente "ter", indica uma experiência que começou no passado e ainda é relevante agora.
- Quando mantém significado pleno: quando é seguido de substantivo (`I have two dogs.`).
- Quando é auxiliar: quando é seguido de um verbo no particípio (`have/has + verbo-ed/particípio`).
- Formas: have (I/you/we/they) · has (he/she/it) · had (passado, todos os sujeitos).
- Comparação com português: o "ter" auxiliar existe em português também! "Eu tenho trabalhado muito" é a mesma lógica de "I have worked a lot" — esse é um dos poucos casos em que a tradução literal realmente ajuda.
- 🚫 Erro comum: confundir "have" posse com "have" auxiliar e tentar aplicar a regra de do/does por engano (`Do you have worked here?` está errado — o have já é auxiliar suficiente aqui: `Have you worked here?`).
- Exemplo profissional (`[🎯 ENTREVISTA]`): `I have managed social media campaigns for two years.`
- Mini exercício: Identifique a função — "She has a new laptop." (have = posse) vs. "She has worked here for years." (have = auxiliar de tempo perfeito)

---

## 5. WH-WORDS `[FLUENCYPASS + TUTOR]`

**Regra fixa a destacar no topo do módulo:** a WH-word NUNCA substitui o auxiliar — ela só se soma a ele. Comparar sempre: `Do you work remotely?` → `Where do you work?` → `Why do you work remotely?` → `What do you do?`

| WH-word | Busca | Exemplo | Tradução natural | Erro comum | Pergunta de entrevista | Pergunta cotidiana |
|---|---|---|---|---|---|---|
| **What** | coisa/informação | What do you do? | O que você faz (da vida)? | Esquecer o segundo "do" (verbo principal) | What are your main responsibilities? | What's for dinner? |
| **Where** | lugar | Where do you work? | Onde você trabalha? | Confundir com "Were" (verbo to be no passado) | Where have you worked before? | Where do you live? |
| **When** | tempo | When did you start this job? | Quando você começou este trabalho? | Esquecer o "did" e deixar o verbo no passado sozinho | When are you available to start? | When is your birthday? |
| **Who** | pessoa | Who do you report to? | A quem você se reporta? | Usar "Who" no lugar de "Whom" (raro atrapalhar, mas formalmente "whom" seria o objeto) | Who did you work with on this project? | Who is your best friend? |
| **Why** | motivo | Why do you want this job? | Por que você quer esta vaga? | Responder só com "Because" sem completar a frase | Why are you leaving your current job? | Why do you like this song? |
| **Which** | escolha entre opções | Which tool do you prefer, Excel or Google Sheets? | Qual (dentre as opções)? | Confundir com "What" quando não há opções claras | Which project are you most proud of? | Which movie do you want to watch? |
| **Whose** | posse | Whose idea was this campaign? | De quem foi essa ideia? | Confundir com "Who's" (contração de "who is") | Whose responsibility was the budget? | Whose phone is this? |
| **How** | maneira/modo | How do you handle deadlines? | Como você lida com prazos? | Usar "How" para perguntar profissão (o certo é "What do you do?") | How do you prioritize your tasks? | How was your weekend? |

**Marcar como entendido:** cada linha da tabela deve ter um checkbox/botão que salva o status no localStorage (reaproveitando os mesmos 8 IDs de tópicos da Home — este entra em `whwords`).
## 6. ENGLISH FOR INTERVIEWS — AMANDA `[🎯 ENTREVISTA + TUTOR]`

**Instrução de exibição:** cada bloco abaixo deve ter: versão A1/A2 (simples), versão mais natural (fluente), estrutura desmontada (peças), botão "🔊 Ouvir" (na versão natural), campo de texto editável para a aluna escrever a própria versão (salvo no localStorage por bloco), botão "Copiar", e um checklist de palavras-chave.

Onde a informação profissional é real (baseada no histórico dela), está identificada como `[REAL]`. Onde é apenas modelo/estrutura a preencher, está identificada como `[EDITÁVEL]` — a aluna deve customizar antes de usar de verdade.

---

### Bloco 1 — Apresentação profissional
- A2: `I work in marketing and communication. I have experience with internal campaigns and customer success.`
- Natural: `I'm a marketing and communications professional with over 12 years of experience, ranging from internal communication campaigns to customer success and CRM.` `[REAL]`
- Estrutura: `I'm a [profissão] with [tempo] of experience, ranging from [área 1] to [área 2].`
- Checklist de palavras-chave: professional · experience · ranging from · CRM

### Bloco 2 — Formação
- A2: `I studied Design. I also have a certificate in digital media and marketing.`
- Natural: `I have a degree in Design, a postgraduate certificate in digital media management, and a performance marketing certification from EBAC.` `[REAL]`
- Estrutura: `I have a degree in [curso], a [tipo de certificado] in [área], and a [certificação] from [instituição].`
- Checklist: degree · postgraduate · certification

### Bloco 3 — Experiência
- A2: `I worked at a company doing internal communication. It was a big campaign.`
- Natural: `One of my main projects was an internal communication campaign at Mondelēz, which raised employee participation from around 70% to 98% among almost 3,000 employees.` `[REAL]`
- Estrutura: `One of my main projects was [projeto] at [empresa], which [resultado, verbo no passado].`
- 🚫 Erro comum a evitar: usar "did" duplicado com verbo no passado (`which did raised` — errado; o certo é só `which raised`, sem did, porque não é pergunta nem negativa).
- Checklist: main project · raised · among

### Bloco 4 — Responsabilidades
- A2: `I take care of campaigns and I help clients.`
- Natural: `I'm responsible for planning and executing marketing campaigns, as well as supporting customers through the CRM.` `[EDITÁVEL — ajuste conforme a vaga]`
- Estrutura: `I'm responsible for [tarefa 1] and [tarefa 2], as well as [tarefa 3].`
- Checklist: responsible for · as well as · executing

### Bloco 5 — Resultados
- A2: `My campaign was very good. It was the best in Latin America.`
- Natural: `That campaign ranked first in Latin America and among the top three globally.` `[REAL]`
- Estrutura: `[Isso/projeto] ranked [posição] in [lugar] and among the top [número] [abrangência].`
- Checklist: ranked · among the top · globally

### Bloco 6 — Ferramentas
- A2: `I use Google Ads and Meta Ads. I know CRM tools too.`
- Natural: `I have hands-on experience with Google Ads, Meta Ads, and CRM platforms, along with basic SQL for data analysis.` `[REAL — ajustar lista conforme a vaga]`
- Estrutura: `I have hands-on experience with [ferramenta 1], [ferramenta 2], and [ferramenta 3].`
- Checklist: hands-on experience · platforms · data analysis

### Bloco 7 — Trabalho remoto
- A2: `I can work remote. I organize my own time.`
- Natural: `I'm comfortable working remotely and I'm used to managing my own schedule and priorities independently.` `[EDITÁVEL]`
- Estrutura: `I'm comfortable [gerúndio] and I'm used to [gerúndio].`
- 🧠 Nota do tutor: "used to" + verbo-ing = estar acostumado com algo (não confundir com "used to" + verbo base, que indica hábito no passado: "I used to work there" = eu costumava trabalhar lá).
- Checklist: comfortable · used to · independently

### Bloco 8 — Pontos fortes
- A2: `I am organized. I learn fast.`
- Natural: `I'd say my main strengths are adaptability and fast learning — I pick up new tools and processes quickly.` `[EDITÁVEL]`
- Estrutura: `I'd say my main strengths are [força 1] and [força 2].`
- Checklist: I'd say · strengths · pick up

### Bloco 9 — Mudança de carreira
- A2: `I want to change my career a little. I want to use technology more.`
- Natural: `I'm currently transitioning toward a role that combines my marketing background with data and AI tools.` `[EDITÁVEL]`
- Estrutura: `I'm currently transitioning toward a role that combines [experiência anterior] with [nova direção].`
- Checklist: transitioning · combines · background

### Bloco 10 — Perguntas ao recrutador
- A2: `What is the team like? Is the job remote?`
- Natural: `Could you tell me more about the team I'd be working with? And is there flexibility for remote work?` `[EDITÁVEL]`
- Estrutura: `Could you tell me more about [assunto]? And is there [pergunta de acompanhamento]?`
- Checklist: Could you tell me · flexibility · working with

---

## 7. PORTUGUÊS COMO PONTE `[TUTOR]`

Seção curta — não deve virar curso de português. Cobrir só:

| Termo | Em português | Em inglês (exemplo) |
|---|---|---|
| Sujeito | quem faz a ação | **She** works here. |
| Verbo principal | a ação em si | She **works** here. |
| Verbo auxiliar | organiza pergunta/negativa | **Does** she work here? |
| Objeto/complemento | o que completa o sentido | She works **here**. |
| Infinitivo | forma "crua" do verbo | to work |
| Gerúndio | verbo + -ing | working |
| Particípio | usado com have/has (tempo perfeito) | worked / gone / done |
| Afirmativa/Negativa/Interrogativa | os 3 tipos de frase | She works. / She doesn't work. / Does she work? |
| Presente/Passado/Futuro | tempo da ação | works / worked / will work |
| Preposição | liga palavras (in, at, on, to, about) | work **at** a company |

---

## 8. EXERCÍCIOS INTERATIVOS `[TUTOR]`

Tipos a implementar (feedback deve sempre explicar o porquê, nunca só "certo/errado"):

1. **Reorganizar palavras:** `remotely / you / do / work` → `Do you work remotely?`
2. **Selecionar o auxiliar certo:** `___ she work in marketing?` (do/does/did) → resposta: does — explicação: "she" é 3ª pessoa singular.
3. **Transformar afirmativa em pergunta:** `You have experience with CRM.` → `Do you have experience with CRM?`
4. **Transformar presente em passado:** `Does she manage the team?` → `Did she manage the team?`
5. **Corrigir o erro:** `Does he plays tennis?` → `Does he play tennis?` (explicação: verbo perde o -s depois de does)
6. **Identificar a função da palavra:** em `Have you worked here?`, o que é "have"? (resposta: auxiliar de tempo perfeito, não posse)
7. **Completar com WH-word:** `___ do you want to leave your current job?` (why)
8. **Montar resposta de entrevista:** dado o bloco 3 (Experiência), pedir para a aluna reescrever com dados próprios.
9. **Repetir em voz alta:** usar o botão de áudio do Laboratório de Frases como apoio.

**Registro de Erros:** toda resposta errada deve ser salva no localStorage com: frase, resposta dada, resposta certa, e a explicação mostrada. Exibir essa lista em um painel dentro do módulo de exercícios, agrupando erros repetidos do mesmo tipo (ex.: "você já errou 3 vezes questões sobre does + -s").
## 9. PRINTABLES `[TUTOR]`

Cada folha = uma ideia central, formato A4, sem parede de texto, legível também em preto e branco. Paleta oficial (já usada na planilha `ingles_toolkit.xlsx`, manter consistência): **berries & clouds**
- vinho `#912124`
- azul periwinkle `#89A0E2`
- rosa berry `#CE7685`
- rosa claro `#F38EAA`
- azul-nuvem `#B9D0E2`
- azul claro `#A6D2DB`

**Folha 1 — Ordem básica da frase**
> Afirmação: Sujeito + Verbo + Complemento — `She works here.`
> Negação (to be): Sujeito + To Be + NOT + Complemento — `She is not tired.`
> Negação (outros verbos): Sujeito + Do/Does/Did + NOT + Verbo — `She does not work here.`
> Pergunta: (Auxiliar/To Be) + Sujeito + Verbo + Complemento + ? — `Does she work here?`

**Folha 2 — To Be x Outros Verbos**
> Tabela simples lado a lado (To Be é folgado / outros verbos são tímidos), reaproveitando exatamente a tabela da aba "Estrutura e Auxiliares" da planilha.

**Folha 3 — Do / Does / Did**
> Os três "cartões" resumidos do Grupo A (ver seção 4 deste documento), com a metáfora do "ladrão do passado" ilustrada visualmente.

**Folha 4 — WH-words**
> Os 8 WH-words em grade 2x4, cada um com: palavra, o que busca (ícone), 1 exemplo curto.

**Folha 5 — Presente x Passado**
> Comparação lado a lado: `You work remotely. / Do you work remotely? / You don't work remotely.` versus `You worked remotely. / Did you work remotely? / You didn't work remotely.`

**Folha 6 — Can / Could / Should / Would**
> Um cartão por modal, com 1 exemplo de uso e 1 de pergunta educada.

**Folha 7 — Have como verbo x auxiliar**
> Lado a lado: `I have a car.` (posse) vs. `I have worked here.` (auxiliar de tempo perfeito).

**Folha 8 — 10 Verbos Comuns**
> Reaproveitar integralmente a aba "10 Verbos Comuns" da planilha `ingles_toolkit.xlsx` (have, want, know, go, like, see, eat, need, work, speak — com afirmação, pergunta presente, pergunta passado).

**Folha 9 — Expressões Comuns**
> Reaproveitar a aba "Expressões Comuns" da planilha (kind of/sort of/type of, a lot of, a couple of, a few/a little, conectores como actually/by the way/in fact, expressões com verbos como get used to/take care of/look forward to/in charge of/make sense).

**Folha 10 — Respostas essenciais para entrevista**
> As 10 estruturas (sem preencher com dados pessoais) dos blocos da seção 6 deste documento — só o esqueleto de cada frase, para colar na parede como cola rápida.

**Comportamento esperado na página:** checkboxes para escolher quais folhas imprimir + botão "Imprimir selecionadas", usando CSS de impressão (`@media print`) para exibir só as folhas marcadas, uma por página (quebra de página entre folhas).

---

## 10. MODO PROFESSOR `[TUTOR]`

Fluxo guiado (não despejar tudo de uma vez): explicação curta → 1 exemplo → 1 pergunta → aguarda resposta da aluna → mostra correção comentada → se errou, nova pergunta do mesmo tipo → só avança após acerto ou confirmação manual da aluna ("entendi, seguir mesmo assim").

Sugestão de primeira sequência guiada (Do/Does/Did, 5 passos):
1. Explicação: "To Be é folgado, os outros verbos são tímidos e precisam de do/does/did."
2. Exemplo: `Does she work here?`
3. Pergunta: "Transforme para negativa." → aguarda resposta.
4. Correção: `She doesn't work here.` + por que (does vira doesn't, verbo sem s).
5. Nova pergunta do mesmo padrão, com outro sujeito/verbo, antes de liberar o próximo módulo.

---

## 11. TDAH E EXPERIÊNCIA VISUAL — checklist para o Claude Design

- Um conceito por vez (evitar seções longas sem quebra visual).
- Muito espaço em branco.
- Textos expansíveis/recolhíveis (accordion) em vez de tudo aberto.
- Cores com função consistente (mesma cor sempre = mesmo tipo de informação, ex.: vermelho para erro comum, verde para macete).
- Botão de "marcar como entendido" em cada tópico.
- Modo claro e escuro.
- Sem gamificação exagerada, sem elogios automáticos genéricos, sem linguagem infantilizada.
- Funcionar bem tanto no computador quanto em tablet.

---

## 12. REGRAS SOBRE AS FONTES (repetir para o Claude Design não misturar)

- Sempre diferenciar visualmente: `[FLUENCYPASS]` / `[TUTOR]` / `[🔭 ANTECIPA]` / `[🎯 ENTREVISTA]`.
- Nunca afirmar que um conteúdo está em uma Unit se isso não estiver confirmado pelos PDFs oficiais (Units 2 a 5 já foram conferidas para este documento — os mapeamentos acima são reais, não inventados).
- Onde a fonte oficial for simplificada demais, adicionar nota separada do tutor, sem fingir que a nuance já estava no material original.

---

## ENTREGA ESPERADA (para o Claude Design)

1. `english_toolkit_amanda.html` (ou estrutura equivalente do Design) — funcional localmente, sem servidor.
2. Progresso salvo via `localStorage` (não inventar backend).
3. Áudio via Web Speech API do navegador (não prometer arquivos MP3 reais).
4. Printables com impressão seletiva via `@media print`.
5. Se o Design entregar por fases, a primeira versão funcional deve cobrir no mínimo: Home, Laboratório de Frases, Do/Does/Did, WH-words, Entrevistas, Printables — os demais módulos (Modo Professor completo, Registro de Erros avançado) podem vir na sequência.
# REVISÃO DO CONTEÚDO — CORREÇÕES E NOVAS SEÇÕES
## (substitui trechos do arquivo anterior onde houver conflito)

---

## A. CORREÇÃO OBRIGATÓRIA DOS DADOS PROFISSIONAIS

O arquivo anterior continha afirmações profissionais tratadas como `[REAL]` sem confirmação — isso foi corrigido abaixo. **Use estas versões no lugar das antigas.**

**Formação (correta):**
> Curso Superior de Tecnologia em Gestão de Mídias Digitais.

Não usar `degree in Design` em nenhum lugar do toolkit.

**Experiência (sem número inventado):**
> `I'm a marketing and communications professional with experience across internal communications, digital marketing, media, customer service, and CRM.`

Não usar `over 12 years of experience` a menos que Amanda confirme e preencha esse número manualmente no campo editável.

**Métricas e resultados — tratar como `[EDITÁVEL]`, não `[REAL]`:**
- Percentual de participação em campanha (ex.: "de 70% para 98%") → editável, sem número fixo.
- Número de funcionários alcançados → editável.
- Colocação/ranking (ex.: "1º lugar na América Latina") → editável.
- Qualquer métrica sem fonte confirmada anexada.

### Blocos de entrevista corrigidos (substituem os do arquivo anterior)

**Bloco 1 — Apresentação profissional**
- A2: `I work in marketing and communication.`
- Natural: `I'm a marketing and communications professional with experience across internal communications, digital marketing, and customer success.` `[EDITÁVEL — ajuste tempo de experiência e ênfase conforme a vaga]`
- Estrutura: `I'm a [profissão] with experience across [área 1], [área 2], and [área 3].`

**Bloco 2 — Formação**
- A2: `I studied Digital Media Management.`
- Natural: `I have a degree in Digital Media Management (Gestão de Mídias Digitais), a performance marketing certification from EBAC, and an SQL certification.` `[EDITÁVEL — confirmar nomes exatos das certificações antes de usar em entrevista real]`
- Estrutura: `I have a degree in [curso], a [certificação 1], and a [certificação 2].`

**Bloco 3 — Experiência**
- A2: `I worked on an internal communication campaign.`
- Natural: `One of my main projects was an internal communication campaign that significantly increased employee participation.` `[EDITÁVEL — preencha o número real de participação e a empresa antes de usar]`
- Estrutura: `One of my main projects was [projeto] at [empresa], which [resultado, verbo no passado].`
- Campo editável dedicado: "Preencha aqui o resultado exato, com os números certos: ___________"

**Bloco 4 — Responsabilidades:** mantém-se igual ao arquivo anterior, já era `[EDITÁVEL]`.

**Bloco 5 — Resultados**
- Natural: `That campaign achieved strong results in employee engagement.` `[EDITÁVEL — sem ranking/percentual até confirmação]`
- Campo editável dedicado para a aluna preencher o número real quando tiver a fonte em mãos.

**Bloco 6 — Ferramentas**
- Natural: `I have hands-on experience with digital marketing platforms and CRM tools.` `[EDITÁVEL — listar ferramentas específicas: Google Ads? Meta Ads? RD Station? HubSpot?]`

**Blocos 7 a 10:** mantêm-se iguais ao arquivo anterior (já eram `[EDITÁVEL]`).

**Regra permanente para todo o toolkit:** nenhum número, percentual, ranking ou nome de empresa deve aparecer como `[REAL]` sem estar confirmado em um arquivo fornecido por ela. Na dúvida, marcar `[EDITÁVEL]` e deixar campo em branco para preenchimento manual.
## B. DÚVIDAS QUE TRAVARAM A AMANDA
### Seção principal e visível na Home — 24 microaulas completas

**Estrutura fixa de cada card (16 elementos, sempre nesta ordem):**
1. Dúvida (como ela faria) · 2. Resposta curta (≤3 frases) · 3. Explicação lógica em PT · 4. Explicação tecnicamente correta · 5. Metáfora · 6. Frase desmontada · 7. Comparação com PT · 8. Erro comum · 9-11. Transformação (afirmativa/negativa/pergunta/resposta curta) · 12. Mini exercício · 13. Exercício extra se errar · 14. Botão "Agora entendi" · 15. Botão "Explique de outro jeito" · 16. Campo "Minha explicação com minhas palavras" (localStorage) + área de Áudio da Aula (ver seção D).

---

### Dúvida 1 — Por que existem dois `do` em "What do you do?"
1. "Por que aparece 'do' duas vezes na mesma frase?"
2. O primeiro `do` só organiza a pergunta; o segundo `do` é o verbo de verdade, significa "fazer/atuar como".
3. Cada `do` tem um trabalho diferente — um é "moldura", o outro é "conteúdo".
4. O primeiro `do` é auxiliar do Present Simple; o segundo é o verbo lexical principal da frase.
5. 🧩 Metáfora: o primeiro `do` é o crachá de "isso é uma pergunta"; o segundo é a pessoa que o crachá está identificando.
6. `What (informação) + do (auxiliar) + you (sujeito) + do (verbo principal) + in Recife (complemento)?`
7. Em português, "O que você faz?" só tem um "faz" — por isso o segundo `do` em inglês soa redundante à primeira vista, mas não é.
8. 🚫 `What you do?` (falta o auxiliar) ou tentar traduzir os dois `do` como se fossem a mesma coisa.
9. Afirmativa: `You do many things in Recife.` Negativa: `You don't do much in Recife.` Pergunta: `What do you do in Recife?` Resposta: `I work with marketing.`
10. Identifique a função de cada palavra: `What do you like about your job?`
11. Se errar: nova frase, mesmo padrão → `Where do you work?`

### Dúvida 2 — O `do` auxiliar funciona como um ponto de interrogação dentro da frase?
1. "Esse `do` é tipo um sinal de pergunta escondido no meio da frase?"
2. Sim, como primeira metáfora — mas ele também aparece na negativa, não só na pergunta.
3. Pensar nele como "isso aqui vai virar pergunta/negativa" ajuda a começar, mas a regra completa é maior.
4. Tecnicamente, `do/does` é o auxiliar que carrega a marcação de tempo/pessoa quando o verbo principal "não pode" carregar sozinho (em perguntas e negativas).
5. 🧩 Metáfora (limitada, mas útil no início): "ponto de interrogação dentro da frase".
6. `Do (auxiliar) + you (sujeito) + like (verbo) + pizza (complemento)?`
7. Português não tem esse "carregador" — só muda a entonação da voz.
8. 🚫 Achar que `do` SÓ aparece em perguntas (esquecendo a negativa: `You don't like pizza.`).
9. Afirmativa: `You like pizza.` Negativa: `You don't like pizza.` Pergunta: `Do you like pizza?` Resposta: `Yes, I do.`
10. A frase é pergunta, negativa ou afirmativa? `She doesn't work here.`
11. Se errar: repetir com outro verbo → `They don't travel much.`

### Dúvida 3 — Se `what` já indica uma pergunta, por que ainda precisamos do auxiliar?
1. "Já tem 'what', por que ainda precisa de 'do'?"
2. `What` só diz qual informação está faltando; ele não organiza a estrutura da frase sozinho — quem faz isso é o auxiliar.
3. São dois trabalhos separados: um escolhe a "categoria" da resposta, o outro monta a ordem da frase.
4. WH-words se combinam com a estrutura de pergunta já existente (auxiliar + sujeito + verbo); elas não a substituem.
5. 🧩 Metáfora: `what` é a etiqueta da caixa; `do` é a fita que fecha a caixa — precisa das duas.
6. `Where (informação) + do (auxiliar) + you (sujeito) + live (verbo)?`
7. Em português, "onde" sozinho já muda a ordem ("Onde você mora?" viraria estranho sem inversão) — mas o inglês exige o auxiliar de qualquer forma.
8. 🚫 `What you want?` (usar a WH-word como se ela bastasse sozinha).
9. Afirmativa: `You want coffee.` Negativa: `You don't want coffee.` Pergunta: `What do you want?`
10. Complete: `___ do you need?` (resposta: What)
11. Se errar: `___ do you live?` (Where)

### Dúvida 4 — Por que o `do` vem depois da WH-word?
1. "Por que a ordem é WH-word primeiro, e só depois o do?"
2. Porque a WH-word sempre define QUAL informação falta antes de qualquer outra coisa na frase.
3. A WH-word "abre" a pergunta anunciando o tipo de resposta esperada; o resto (auxiliar+sujeito+verbo) vem em seguida, como numa pergunta comum.
4. Ordem fixa: `WH-word + auxiliar + sujeito + verbo + complemento?` — a WH-word sempre ocupa a primeira posição.
5. 🧩 Metáfora: a WH-word é quem abre a porta da sala; o resto da frase entra depois, na ordem de sempre.
6. `Why (motivo) + do (auxiliar) + you (sujeito) + study (verbo) + English (complemento)?`
7. Em português, a pergunta com "por que" também vem primeiro ("Por que você estuda inglês?") — aqui a ordem é parecida, o que muda é o auxiliar extra.
8. 🚫 Inverter a ordem: `Do why you study English?`
9. Afirmativa: `You study English.` Negativa: `You don't study English.` Pergunta: `Why do you study English?`
10. Reorganize: `work / where / you / do` → `Where do you work?`
11. Se errar: `you / do / why / travel` → `Why do you travel?`

### Dúvida 5 — Por que "Do you have a car?" precisa de `do` se `have` já é um verbo?
1. "Have já é um verbo, por que precisa de outro (`do`) do lado?"
2. Porque `have`, aqui, é o verbo PRINCIPAL comum (significa "ter"), e todo verbo principal comum (exceto to be) precisa de do/does/did para perguntar.
3. `Have` como "ter" é "tímido" igual qualquer outro verbo (like, work, travel) — só o `have` AUXILIAR de tempo perfeito é diferente (ver Dúvida 12).
4. Regra: verbo principal comum + presente + pergunta = `do/does` + sujeito + verbo na forma base.
5. 🧩 Metáfora: `have`-posse é só mais um verbo "tímido" da fila; ele não é exceção.
6. `Do (auxiliar) + you (sujeito) + have (verbo principal, "ter") + a car (complemento)?`
7. Em português não existe isso — "Você tem um carro?" muda só a entonação.
8. 🚫 `Have you a car?` (estrutura antiga britânica, rara hoje) ou `Are you have a car?` (misturar to be com have).
9. Afirmativa: `You have a car.` Negativa: `You don't have a car.` Pergunta: `Do you have a car?`
10. Corrija: `Have you a dog?` → forma moderna comum: `Do you have a dog?`
11. Se errar: repita com `need` → `Do you need help?`

### Dúvida 6 — Qual é a diferença entre `do` como verbo principal e `do` como auxiliar?
1. "Como sei se o `do` é o verbo de verdade ou só o organizador da frase?"
2. Se `do` é o ÚNICO verbo da frase, ele é principal (significa "fazer"). Se aparece do lado de OUTRO verbo, ele é auxiliar (sem significado próprio).
3. Teste rápido: existe outro verbo na frase? Se sim, o `do` é auxiliar.
4. `Do` principal: `I do my homework.` `Do` auxiliar: `Do you like it?` (o verbo principal é "like").
5. 🧩 Metáfora: `do` principal é o ator da cena; `do` auxiliar é só o diretor de palco, não aparece na história.
6. `I (sujeito) + do (verbo principal, "fazer") + the dishes (complemento).`
7. Em português, "eu faço" é sempre o verbo de verdade — não existe essa versão "vazia" do "fazer".
8. 🚫 Traduzir todo `do` como "fazer", inclusive quando ele é só auxiliar.
9. Comparação lado a lado: `I do the dishes.` (principal) vs. `Do you wash the dishes?` (auxiliar + "wash" é o principal).
10. Classifique o `do`: `I do yoga every morning.` (resposta: principal)
11. Se errar: `Do you do yoga?` (aqui tem os dois: o primeiro é auxiliar, o segundo é principal)

### Dúvida 7 — Por que usamos `did + verbo base` e não `did + verbo no passado`?
1. "Por que não junta o did com o verbo já no passado?"
2. Porque o `did` JÁ carrega sozinho a informação de passado da frase inteira — colocar os dois marcaria o passado duas vezes.
3. Regra do "ladrão": quando `did` aparece, ele rouba o passado só para si; o verbo principal fica "neutro" (forma base).
4. Estrutura: `Did + sujeito + verbo BASE + complemento?` (nunca verbo com -ed ou irregular).
5. 🧩 Metáfora: "ladrão do passado" — o `did` rouba a marca de tempo e não deixa o verbo principal levar nada.
6. `Did (auxiliar de passado) + you (sujeito) + watch (verbo base, não "watched") + the race (complemento)?`
7. Em português marcamos o passado só uma vez também ("você assistiu"), mas de um jeito diferente (mudando o próprio verbo, sem auxiliar extra).
8. 🚫 `Did you watched the race?` — dobrar a marca de passado.
9. Afirmativa: `You watched the race.` Negativa: `You didn't watch the race.` Pergunta: `Did you watch the race?`
10. Corrija: `Did she worked yesterday?` → `Did she work yesterday?`
11. Se errar: `Did they went home?` → `Did they go home?`

### Dúvida 8 — Por que "Did you watch?" está correto e "Did you watched?" está errado?
1. "Essa eu ainda erro direto — por que não pode 'did you watched'?"
2. Porque o `did` já é a ÚNICA marca de passado permitida na frase; o verbo depois dele sempre volta para a forma base, mesmo em verbos irregulares.
3. Isso vale para TODOS os verbos, regulares ou irregulares: `did you go` (não "went"), `did you eat` (não "ate").
4. Regra fixa, sem exceção: `did` + verbo base, sempre — mesmo com verbos irregulares.
5. 🧩 Metáfora: o "ladrão" não aceita dividir o butim — ou o passado fica com o did, ou com o verbo, nunca com os dois.
6. `Did (passado) + you (sujeito) + go (base, não "went") + home (complemento)?`
7. Em português não existe essa regra de "só um lugar pode marcar o tempo" — por isso é a armadilha mais comum de brasileiros.
8. 🚫 `Did you ate breakfast?`, `Did you went there?`, `Did you saw it?` — todos errados pelo mesmo motivo.
9. Corrija as três: `Did you eat breakfast?` / `Did you go there?` / `Did you see it?`
10. Corrija: `Did you bought the tickets?` → `Did you buy the tickets?`
11. Se errar: repetir o padrão com mais 2 verbos irregulares (`came`, `had`) até fixar.
### Dúvida 9 — Por que o verbo `to be` não precisa de `do/does/did`?
1. "Por que to be é diferente de todos os outros verbos?"
2. Porque `to be` já tem "força" própria para ir sozinho ao início da pergunta — ele não precisa de ajuda.
3. É uma exceção histórica do inglês: to be, modais e auxiliares "de verdade" (has/have quando são auxiliares) já carregam tempo/pessoa sozinhos.
4. `To be` é chamado de verbo "auxiliar-capaz": ele mesmo se move para a posição de pergunta, sem precisar de do/does/did.
5. 🧩 Metáfora: `to be` é "folgado" — ele não pede ajuda a ninguém.
6. `Is (to be) + he (sujeito) + tired (complemento)?`
7. Em português, o verbo "ser/estar" também muda de posição sozinho em perguntas formais ("És tu o responsável?") — não é tão estranho quanto parece.
8. 🚫 `Do you are tired?` — juntar do com to be, redundante e errado.
9. Afirmativa: `You are tired.` Negativa: `You aren't tired.` Pergunta: `Are you tired?`
10. Corrija: `Does she is happy?` → `Is she happy?`
11. Se errar: `Do they are ready?` → `Are they ready?`

### Dúvida 10 — Por que "Are you tired?" está correto e "Do you are tired?" está errado?
1. "Essa eu confundo direto — por que não pode juntar do com are?"
2. Porque `are` (parte do to be) já FAZ o trabalho que o `do` faria — colocar os dois juntos é duplicar a mesma função.
3. Cada frase só pode ter UM "organizador" de pergunta: ou é to be sozinho, ou é do/does/did + verbo comum — nunca os dois ao mesmo tempo.
4. Teste rápido: se o verbo principal é uma forma de to be (am/is/are/was/were), NUNCA use do/does/did.
5. 🧩 Metáfora: são dois "porteiros" diferentes — só um pode abrir a porta da pergunta por vez.
6. `Are (to be) + you (sujeito) + tired (complemento)?` — sem `do` nenhum.
7. Nenhum paralelo direto em português aqui — é uma regra puramente estrutural do inglês.
8. 🚫 `Do you are tired?`, `Does he is here?`, `Did they were happy?` — todos com o mesmo erro.
9. Corrija as três acima: `Are you tired?` / `Is he here?` / `Were they happy?`
10. Corrija: `Do you are ready?` → `Are you ready?`
11. Se errar: repetir com `Is/Was` em mais 2 frases.

### Dúvida 11 — Por que os modais `can/could/should/would` também não usam `do/does/did`?
1. "Can, could, should, would também são 'folgados' como o to be?"
2. Sim — os modais são outro grupo que vai sozinho para o início da pergunta, igual ao to be.
3. Modais já carregam a ideia de capacidade/conselho/hipótese sozinhos; juntar com do/does/did seria redundante.
4. Regra: modal + sujeito + verbo BASE + complemento — nunca `do + modal`.
5. 🧩 Metáfora: modais são da mesma "turma folgada" do to be.
6. `Can (modal) + you (sujeito) + speak (verbo base) + English (complemento)?`
7. Em português, "você pode falar inglês?" também não tem um "faz" escondido — aqui o paralelo ajuda.
8. 🚫 `Do you can speak English?`, `Does she should go?` — nunca combine do/does/did com modal.
9. Afirmativa: `You can speak English.` Negativa: `You can't speak English.` Pergunta: `Can you speak English?`
10. Corrija: `Do you should study more?` → `Should you study more?` (ou, mais natural: `You should study more.`)
11. Se errar: repetir com `Would` → `Would you like some coffee?`

### Dúvida 12 — Quando `have` significa "ter" e quando funciona como auxiliar?
1. "Have às vezes parece 'ter' e às vezes parece outra coisa — como eu diferencio?"
2. Se depois do `have` vem um SUBSTANTIVO, é posse ("ter"). Se vem um VERBO NO PARTICÍPIO (geralmente terminado em -ed ou irregular), é auxiliar de tempo perfeito.
3. Teste rápido: `have` + substantivo = "ter"; `have` + particípio = auxiliar (indica experiência/resultado).
4. Estrutura do tempo perfeito: `have/has + particípio` — não significa exatamente "ter", indica uma ação passada com relevância no presente.
5. 🧩 Metáfora: `have`-posse é o "dono de um objeto"; `have`-auxiliar é o "crachá de experiência".
6. `I (sujeito) + have (auxiliar) + worked (particípio) + here (complemento).`
7. Em português, o "ter" auxiliar também existe: "Eu tenho trabalhado muito" é a mesma lógica de "I have worked a lot" — aqui a tradução literal ajuda, ao contrário do do/does.
8. 🚫 Confundir os dois e aplicar a regra do do/does no have-auxiliar: `Do you have worked here?` (errado) em vez de `Have you worked here?`
9. Afirmativa: `I have worked here.` Negativa: `I haven't worked here.` Pergunta: `Have you worked here?`
10. Classifique: `She has a new laptop.` (resposta: posse) vs. `She has worked here for years.` (resposta: auxiliar)
11. Se errar: mais um par para classificar (`He has two dogs.` / `He has traveled a lot.`)

### Dúvida 13 — Qual é a diferença entre "I have a car." e "I have worked here."?
1. "As duas frases têm 'have', mas parecem diferentes — por quê?"
2. Na primeira, `have` é o verbo principal (posse: "ter um carro"). Na segunda, `have` é auxiliar, e o verbo principal de verdade é "worked" (particípio).
3. A pista visual é o que vem depois do have: substantivo (car) = posse; particípio (worked) = auxiliar.
4. `I have a car.` = presente simples, posse. `I have worked here.` = present perfect, auxiliar + particípio.
5. 🧩 Metáfora: no primeiro, "have" segura um objeto na mão; no segundo, "have" está de mãos livres, só carregando o tempo verbal.
6. `I (sujeito) + have (auxiliar) + worked (verbo principal, particípio) + here (complemento).`
7. Em português, a diferença também aparece: "eu tenho um carro" (posse) vs. "eu tenho trabalhado aqui" (auxiliar) — repare que os dois "tenho" soam parecidos, mas fazem trabalhos diferentes, igual no inglês.
8. 🚫 Tentar negar as duas frases da mesma forma sem perceber a diferença de estrutura.
9. Negativas corretas: `I don't have a car.` (posse, usa do/does porque é verbo comum!) vs. `I haven't worked here.` (auxiliar, usa haven't).
10. Classifique e negue: `They have a house.` (posse → `They don't have a house.`)
11. Se errar: `We have traveled a lot.` (auxiliar → `We haven't traveled a lot.`)

### Dúvida 14 — Por que "I'm into reading" está correto?
1. "Por que 'reading' e não 'to read' aqui?"
2. Porque depois de uma preposição (`into`), o verbo em inglês SEMPRE vira -ing — nunca fica no infinitivo com "to".
3. `Into` é preposição; depois de preposição, o verbo funciona como um substantivo (por isso ganha -ing).
4. Regra fixa: preposição + verbo = sempre -ing (gerúndio), sem exceção.
5. 🧩 Metáfora: depois de uma preposição, o verbo "se veste" de substantivo — e o traje de substantivo do verbo é o -ing.
6. `I'm (sujeito+to be) + into (preposição) + reading (verbo-ing, obrigatório).`
7. Em português, "sou fã de ler" também usa o infinitivo — aqui não há paralelo direto, é uma regra só do inglês.
8. 🚫 `I'm into to read.` (usar "to" depois de preposição).
9. Mais exemplos com a mesma regra: `I'm crazy about cooking.` / `She's tired of waiting.`
10. Complete: `He's into (play) ___ video games.` (resposta: playing)
11. Se errar: `They're afraid of (fly) ___.` (resposta: flying)

### Dúvida 15 — Por que "I'm into to read" está errado?
1. "Essa eu ainda erro — por que não pode usar 'to' aqui?"
2. Porque "to" + verbo (infinitivo) NUNCA vem depois de uma preposição em inglês — a regra é sempre preposição + verbo-ing.
3. É a mesma regra da Dúvida 14, vista pelo lado do erro: o "to" quebra a estrutura preposição+substantivo que o inglês exige aqui.
4. `Into` já é preposição; colocar "to" depois criaria duas partículas de ligação seguidas, o que o inglês não permite nessa posição.
5. 🧩 Metáfora: você não pode vestir o verbo de "substantivo" (-ing) e de "ação pura" (to+verbo) ao mesmo tempo — escolha um traje.
6. `into (preposição) + reading (substantivo-ing)` — correto. `into (preposição) + to read` — dois conectores colidindo, errado.
7. Sem paralelo direto em português.
8. 🚫 `I'm into to cook.`, `She's crazy about to travel.` — mesmo erro em outros verbos de gosto+preposição.
9. Correções: `I'm into cooking.` / `She's crazy about traveling.`
10. Corrija: `He's tired of to wait.` → `He's tired of waiting.`
11. Se errar: `We're afraid of to fly.` → `We're afraid of flying.`

### Dúvida 16 — Qual é a diferença entre `read`, `to read` e `reading`?
1. "Read, to read, reading — quando uso cada um?"
2. `Read` é a forma base (usada depois de do/does/did e modais). `To read` é o infinitivo (usado como propósito ou depois de certos verbos como "want", "like"). `Reading` é o gerúndio (usado depois de preposições e em tempos contínuos).
3. Cada forma tem um "encaixe" gramatical específico — não são intercambiáveis livremente.
4. Base: `Do you read?` / Infinitivo: `I want to read.` / Gerúndio: `I'm into reading.` ou `I'm reading now.`
5. 🧩 Metáfora: são três roupas diferentes para o mesmo verbo — cada ocasião pede uma roupa certa.
6. Comparação lado a lado: `Does she read?` (base) · `She wants to read.` (infinitivo) · `She's reading.` (gerúndio, ação em andamento) · `She's into reading.` (gerúndio, depois de preposição).
7. Em português, "ler" muda de forma dependendo do contexto também (lendo, para ler, leia) — a lógica de "roupa certa para cada ocasião" existe nos dois idiomas, só os encaixes são diferentes.
8. 🚫 Misturar as três formas: `I want reading.` (errado, "want" pede to+verbo: `I want to read.`)
9. Complete as três formas para "travel": base (`Do you travel?`), infinitivo (`I want to travel.`), gerúndio (`I'm into traveling.`)
10. Escolha a forma certa: `She likes ___ (cook).` (aceita both: to cook / cooking)
11. Se errar: `He's afraid of ___ (fail).` (resposta: failing, obrigatório -ing por causa da preposição "of")
### Dúvida 17 — O que é sujeito?
1. "O que exatamente é 'sujeito' numa frase?"
2. É quem faz (ou é) a ação — a "pessoa/coisa principal" da frase.
3. Antes de traduzir qualquer palavra, pergunte: quem está fazendo isso?
4. Sujeito = substantivo ou pronome que concorda com o verbo principal e determina sua conjugação (I/you/we/they vs. he/she/it).
5. 🧩 Metáfora: o sujeito é o "dono da cena" — tudo na frase gira em torno dele.
6. `She (sujeito) works (verbo) here (complemento).`
7. Igual em português: "Ela trabalha aqui" — "ela" também é o sujeito, na mesma posição.
8. 🚫 Confundir o sujeito com a primeira palavra da frase em frases invertidas (`In Recife, she works.` — "Recife" não é o sujeito, "she" é).
9. Identifique o sujeito: `My sister loves pizza.` (resposta: My sister)
10. Aponte o sujeito: `Does he live in São Paulo?` (resposta: he)
11. Se errar: `Where do your parents live?` (resposta: your parents)

### Dúvida 18 — O que é verbo principal?
1. "Qual é o verbo 'de verdade' da frase, quando tem mais de uma palavra de ação?"
2. É a palavra que carrega o SIGNIFICADO da ação — os auxiliares (do/does/did/have) só organizam a frase, não descrevem a ação.
3. Pergunte: se eu tirar os auxiliares, qual palavra ainda diz o que está acontecendo?
4. Verbo principal = verbo lexical, portador do significado semântico da frase.
5. 🧩 Metáfora: o verbo principal é o "ator"; os auxiliares são a "produção" por trás das câmeras.
6. `Does (auxiliar) she (sujeito) work (verbo principal) here (complemento)?`
7. Em português, geralmente só existe um verbo mesmo (mais economia gramatical) — é por isso que separar os dois em inglês pode confundir.
8. 🚫 Achar que o auxiliar é o verbo principal e tentar traduzi-lo com significado próprio.
9. Aponte o verbo principal: `Did you call your mom?` (resposta: call)
10. Aponte: `I haven't finished the report.` (resposta: finished)
11. Se errar: `She doesn't like coffee.` (resposta: like)

### Dúvida 19 — O que é verbo auxiliar?
1. "E o auxiliar, o que ele realmente faz?"
2. É a palavra que organiza a estrutura da frase (pergunta, negativa, tempo) sem, na maioria das vezes, ter significado próprio.
3. O auxiliar "empresta" a posição gramatical que o verbo principal não pode ocupar sozinho em perguntas/negativas.
4. Auxiliares mais comuns: do/does/did (Present/Past Simple), have/has/had (perfeito), am/is/are/was/were (contínuo e voz passiva).
5. 🧩 Metáfora: o auxiliar é o "crachá de acesso" que libera a pergunta ou a negativa.
6. `Do (auxiliar) you (sujeito) like (verbo principal) pizza (complemento)?`
7. Português não tem essa peça separada — por isso ela é a mais estranha para brasileiros.
8. 🚫 Tentar traduzir o auxiliar palavra por palavra, mesmo quando ele não carrega significado.
9. Identifique o auxiliar: `Does she travel often?` (resposta: does)
10. Identifique: `Have you seen this movie?` (resposta: have)
11. Se errar: `Are you coming to the party?` (resposta: are)

### Dúvida 20 — O que é complemento?
1. "E o resto da frase, depois do verbo, é tudo 'complemento'?"
2. Sim — é tudo que completa o sentido da ação: objeto, lugar, tempo, modo.
3. Pergunte: o que vem depois do verbo e completa a informação da frase?
4. Complemento = objeto direto/indireto, advérbio, ou qualquer termo que complete o predicado.
5. 🧩 Metáfora: se o verbo é a ação, o complemento é "os detalhes da cena" (onde, quando, com quem, o quê).
6. `She works (verbo) in marketing (complemento de área) at a startup (complemento de lugar).`
7. Praticamente igual em português: "Ela trabalha em marketing numa startup" segue a mesma lógica de complementos.
8. 🚫 Confundir complemento com sujeito em frases mais longas (`In the morning, she works.` — "in the morning" é complemento de tempo, não sujeito).
9. Aponte o(s) complemento(s): `I study English at home every day.` (resposta: English / at home / every day)
10. Aponte: `They traveled to Italy last summer.` (resposta: to Italy / last summer)
11. Se errar: `We had lunch with clients yesterday.` (resposta: lunch / with clients / yesterday)

### Dúvida 21 — Como identificar a função de uma palavra antes de tentar traduzi-la?
1. "Antes de traduzir, como eu sei se a palavra é auxiliar, verbo principal, etc.?"
2. Primeiro pergunte "que trabalho essa palavra está fazendo na frase" — só depois pergunte "o que ela significa".
3. Ordem de raciocínio sugerida: (1) qual é o verbo principal? (2) existe um auxiliar do lado? (3) o resto é complemento?
4. Análise sintática básica antes da tradução lexical evita o erro de tentar traduzir palavra por palavra.
5. 🧩 Metáfora: primeiro monte o esqueleto da frase (função), depois vista a roupa (significado).
6. `Have (função: auxiliar) you (função: sujeito) worked (função: verbo principal) here (função: complemento)?`
7. Em português, como a estrutura é mais parecida com a tradução literal, esse passo intermediário costuma ser pulado — mas em inglês ele é essencial.
8. 🚫 Traduzir "have" automaticamente como "ter" mesmo quando ele é auxiliar (ver Dúvida 12).
9. Pratique a ordem: em `Does she manage the team?`, primeiro ache o verbo principal (manage), depois o auxiliar (does), depois o sujeito (she).
10. Aplique a ordem em: `Did you send the email?`
11. Se errar: repita em `Are they coming tonight?`

### Dúvida 22 — Por que eu entendo as palavras isoladamente, mas travo ao montar a frase?
1. "Eu sei o significado de cada palavra, mas não consigo juntar tudo na ordem certa — por quê?"
2. Porque vocabulário e estrutura são habilidades diferentes: saber o que uma palavra significa não ensina automaticamente onde ela vai na frase.
3. Isso é comum e esperado — principalmente para quem aprendeu muito por leitura/contexto (como você), que absorve significado mas não necessariamente ordem de produção.
4. A solução não é aprender mais palavras, é praticar a ORDEM fixa das peças (sujeito → auxiliar → verbo → complemento) até virar automático.
5. 🧩 Metáfora: você já tem todas as peças do LEGO — o que falta é o manual de montagem, não peças novas.
6. Por isso o Laboratório de Frases deste toolkit foca em desmontar/remontar, não em ensinar vocabulário novo.
7. Em português, a ordem das peças já é automática para você (processamento nativo); em inglês, esse automatismo ainda está em construção.
8. 🚫 Tentar resolver isso estudando mais vocabulário, em vez de praticar montagem de frases.
9. Sem exercício de tradução aqui — este card é conceitual. Ação sugerida: revisitar o Laboratório de Frases (seção 3) diariamente, por poucos minutos.
10. Campo "Minha explicação com minhas palavras" é especialmente importante neste card.
11. Botão "Explique de outro jeito" deve oferecer analogia alternativa (ex.: comparar com montar uma receita seguindo a ordem dos passos, não só ter os ingredientes).

### Dúvida 23 — Como transformar uma afirmativa em negativa e depois em pergunta?
1. "Existe um passo a passo fixo para transformar a frase?"
2. Sim: (1) identifique o auxiliar ou to be; (2) para negativa, acrescente "not" (ou n't) logo depois dele; (3) para pergunta, mova esse mesmo elemento para o início da frase.
3. O "elemento que se move" é sempre o mesmo: to be, auxiliar (do/does/did/have) ou modal — nunca o verbo principal.
4. Passo a passo técnico: Afirmativa → localizar auxiliar/to be → Negativa = auxiliar + not + verbo base → Pergunta = auxiliar + sujeito + verbo base.
5. 🧩 Metáfora: o auxiliar é uma peça móvel — ela fica no meio na afirmativa, ganha um "not" do lado na negativa, e pula pro início na pergunta.
6. `She works here.` → `She doesn't work here.` → `Does she work here?`
7. Em português, a negativa é mais simples (só "não" antes do verbo), e a pergunta muda só a entonação — por isso o inglês parece ter "passos extras".
8. 🚫 Esquecer de voltar o verbo principal para a forma base ao negar/perguntar (`She doesn't works here.`)
9. Pratique com: `They travel a lot.` → negativa → pergunta.
10. Pratique com: `He has a car.` → negativa → pergunta (atenção: aqui "have" é posse, usa do/does).
11. Se errar: `We live in Recife.` → negativa → pergunta.

### Dúvida 24 — Como saber qual palavra carrega o presente, a terceira pessoa e o passado?
1. "Cada tempo/pessoa 'mora' em uma palavra diferente — como eu identifico qual?"
2. Presente simples (I/you/we/they): mora no próprio verbo, sem marca extra. Terceira pessoa (he/she/it): mora no -s/-es/-ies do verbo (afirmativa) ou no "does" (pergunta/negativa). Passado: mora no -ed/irregular do verbo (afirmativa) ou no "did" (pergunta/negativa).
3. Regra visual: só UM lugar por frase pode carregar a marca de tempo/pessoa — nunca dois ao mesmo tempo.
4. Tabela-resumo: presente afirmativa = verbo puro (ou +s na 3ª pessoa); presente pergunta = do/does + verbo base; passado afirmativa = verbo+ed/irregular; passado pergunta = did + verbo base.
5. 🧩 Metáfora: é como uma "bagagem" — ou o verbo carrega a mala do tempo, ou o auxiliar carrega por ele, nunca os dois com bagagem ao mesmo tempo.
6. Comparação lado a lado: `She works here.` (3ª pessoa no verbo) / `Does she work here?` (3ª pessoa no does, verbo limpo) / `She worked here.` (passado no verbo) / `Did she work here?` (passado no did, verbo limpo).
7. Português marca tudo direto no verbo (trabalha/trabalhou) sem precisar de auxiliar — por isso esse "revezamento" de quem carrega a marca é a parte mais estranha do inglês para brasileiros.
8. 🚫 Marcar tempo/pessoa duas vezes: `Does she works?`, `Did she worked?`
9. Identifique onde está a marca: `He plays tennis.` (resposta: no verbo, -s de 3ª pessoa) vs. `Does he play tennis?` (resposta: no does)
10. Identifique: `They visited Rome.` vs. `Did they visit Rome?`
11. Se errar: repetir com mais um par de frases antes de considerar o card concluído.

---

## C. TRILHA PARALELA — "COMO A FRASE FUNCIONA" `[TUTOR]`

Índice de navegação cruzada (não duplica conteúdo — aponta para os cards já escritos acima e nos módulos anteriores):

1. Quem faz a ação? → Dúvida 17 (Sujeito)
2. Qual é o verbo principal? → Dúvida 18
3. Existe um auxiliar? → Dúvida 19
4. Como a frase vira pergunta? → Dúvida 23
5. Como a frase vira negativa? → Dúvida 23
6. Como o inglês marca o presente? → Dúvida 24
7. Como marca a terceira pessoa? → Dúvida 24
8. Como marca o passado? → Dúvidas 7, 8, 24
9. Como as WH-words escolhem a informação? → Módulo 5 (WH-words) + Dúvidas 3 e 4
10. Como funcionam os modais? → Módulo 4, Grupo C + Dúvida 11
11. Como `have` e `be` mudam de função? → Dúvidas 9, 10, 12, 13
12. Como usar essas estruturas em entrevistas? → Módulo 6 (English for Interviews)
## D. ÁUDIO DA AULA — especificação para cada microaula `[TUTOR]`

Cada uma das 24 microaulas (seção B) e cada entrada dos módulos de Auxiliares/WH-words deve reservar um bloco visual **"Áudio da Aula"** com os seguintes sub-blocos:

1. **Explicação em português** — player/botão para uma explicação curta em áudio (rótulo: "Ouça a lógica antes de estudar a regra."). Fonte: Modo B (mp3, se existir) com fallback para texto lido por Web Speech API em `lang="pt-BR"`.
2. **Frase em inglês — velocidade lenta** — Web Speech API com `utterance.rate = 0.7`, pronunciando a frase com pausas entre peças (inserir vírgulas/pausas no texto lido, ex.: "What, do, you, do, in Recife?").
3. **Frase em inglês — velocidade natural** — Web Speech API com `utterance.rate = 1`.
4. **Escute e repita** — fluxo: toca a frase → pausa de ~3s (setTimeout) → mostra "Sua vez!" → toca novamente → permite repetir o ciclo com um botão "🔁 De novo".
5. **Mini listening** — áudio curto (a própria frase da microaula) seguido de 1 pergunta de múltipla escolha (ex.: "Qual auxiliar foi usado?", "Presente ou passado?", "have é posse ou auxiliar?"). Ver banco de mini listenings abaixo.
6. **Minha gravação** — espaço reservado, rótulo "Grave tua versão aqui." Implementar com `MediaRecorder` se tecnicamente viável no ambiente do Claude Design; caso não seja possível nesta fase, manter placeholder visualmente identificado como "Gravação ainda não disponível nesta versão" — nunca simular que grava sem gravar de fato.

### Dois modos de áudio (arquitetura)
- **Modo A — Web Speech API:** usado para leitura imediata, sem depender de arquivo. Permitir seletor de voz (en-US / en-GB, quando o navegador oferecer) e de velocidade (lenta/normal).
- **Modo B — Arquivos personalizados (mp3):** estrutura de pastas sugerida:
```
audio/
  do_explicacao_pt.mp3
  do_frase_lenta.mp3
  do_frase_natural.mp3
  do_listening_01.mp3
  does_explicacao_pt.mp3
  did_explicacao_pt.mp3
  whwords_explicacao_pt.mp3
  have_explicacao_pt.mp3
  be_explicacao_pt.mp3
  modais_explicacao_pt.mp3
```
Se um arquivo não existir, exibir "Áudio personalizado ainda não adicionado" e manter o botão de Web Speech API como alternativa — nunca quebrar o layout por arquivo ausente.

### Banco de mini listenings (5 mínimos, expansível)
1. Frase: `What do you do in Recife?` — Pergunta: "Qual dos dois 'do' é o auxiliar — o primeiro ou o segundo?" (resposta: o primeiro)
2. Frase: `Does she work here?` — Pergunta: "Presente ou passado?" (resposta: presente)
3. Frase: `Did you watch the race?` — Pergunta: "Qual é o verbo principal?" (resposta: watch)
4. Frase: `Have you worked here?` — Pergunta: "'Have' aqui é posse ou auxiliar?" (resposta: auxiliar)
5. Frase: `Where do you work?` — Pergunta: "Que informação a WH-word está procurando?" (resposta: lugar)

### Formato do `audio_manifest.json`
O HTML deve tentar carregar `audio_manifest.json` via fetch; se o navegador bloquear leitura local de JSON (comum em `file://`), manter uma cópia do mesmo conteúdo embutida diretamente no `<script>` do HTML como fallback, para funcionar 100% offline. Ver arquivo `audio_manifest.json` entregue junto com este documento para a estrutura exata e exemplos reais preenchidos.

---

## E. TRÊS EXPLICAÇÕES ALTERNATIVAS (botão "Explique de outro jeito") `[TUTOR]`

Para os 6 tópicos abaixo, oferecer 3 abordagens distintas — nunca repetir a mesma explicação com sinônimos.

### 1. DO/DOES/DID
- **Metáfora visual:** do/does/did são o "crachá de acesso" que a frase precisa mostrar para virar pergunta ou negativa — sem crachá, não entra.
- **Comparação com português:** em português a pergunta muda só a entonação da voz ("Você trabalha aqui?"); em inglês, essa "mudança de entonação" precisa aparecer fisicamente como uma palavra (do/does/did).
- **Engenharia da frase:** toda frase tem um "slot" fixo logo depois do sujeito reservado para marcar tempo+pessoa. No presente, esse slot é preenchido pelo próprio verbo (afirmativa) ou por do/does (pergunta/negativa). No passado, por -ed (afirmativa) ou did (pergunta/negativa). Nunca os dois preenchidos ao mesmo tempo.

### 2. WH-WORDS
- **Metáfora visual:** a WH-word é uma etiqueta colada na frente da caixa, dizendo que tipo de resposta está faltando (lugar, tempo, pessoa...) antes mesmo de abrir a caixa.
- **Comparação com português:** "onde", "quando", "por que" também vêm no início da pergunta em português — o que muda é que o inglês ainda exige o auxiliar (do/does/did ou to be) depois da WH-word.
- **Engenharia da frase:** WH-word ocupa sempre a posição 1 da frase; ela não altera nada da estrutura de pergunta que vem depois — é só um "prefixo" que se soma à estrutura comum (auxiliar+sujeito+verbo).

### 3. TO BE
- **Metáfora visual:** to be é o único verbo que "abre a própria porta" — não bate na casa de do/does/did pedindo carona.
- **Comparação com português:** "és tu o responsável?" (embora raro) mostra que em português o verbo "ser" também pode se mover sozinho para o início — o inglês faz isso o tempo todo, não só em registros formais.
- **Engenharia da frase:** am/is/are/was/were carregam sozinhos tempo+pessoa; por isso, na pergunta, eles simplesmente trocam de posição com o sujeito, sem precisar de nenhuma peça auxiliar extra.

### 4. HAVE (posse x auxiliar)
- **Metáfora visual:** "have" tem dois uniformes — de dono de objeto (posse) e de carregador de experiência (auxiliar). O uniforme muda dependendo do que vem depois dele.
- **Comparação com português:** "eu tenho um carro" (posse) e "eu tenho trabalhado muito" (auxiliar) — os dois "tenho" existem em português também, com a mesma divisão de papéis.
- **Engenharia da frase:** have/has + substantivo = posse (comporta-se como verbo comum, pede do/does para perguntar). Have/has + particípio = auxiliar de tempo perfeito (comporta-se como to be, vai sozinho para o início da pergunta).

### 5. CAN/COULD/SHOULD/WOULD
- **Metáfora visual:** os modais são "primos" do to be — da mesma família "folgada", não pedem ajuda a do/does/did.
- **Comparação com português:** "você pode", "você deveria", "você poderia" também vão para o início da pergunta em português sem precisar de um "faz" extra — aqui o paralelo com o inglês é direto.
- **Engenharia da frase:** modal + sujeito + verbo BASE + complemento — o modal ocupa a posição que do/does/did ocupariam, então nunca aparecem juntos na mesma frase.

### 6. TO + VERBO x VERBO-ING
- **Metáfora visual:** "to+verbo" é o verbo em roupa de trabalho (ação/propósito); "verbo-ing" é o verbo em roupa de festa (substantivo, usado depois de preposições ou em ações contínuas).
- **Comparação com português:** o infinitivo em português ("para ler") e o gerúndio ("lendo") também mudam de contexto de uso — mas as regras de quando usar cada um não coincidem exatamente com o inglês, por isso vale sempre conferir a regra específica (ex.: depois de preposição, é sempre -ing).
- **Engenharia da frase:** regra fixa e sem exceção — depois de qualquer preposição (into, about, of, for...), o verbo SEMPRE vai de -ing. Depois de certos verbos (want, need, decide), o verbo vai de to+infinitivo. Depois de outros (enjoy, avoid, keep), vai sempre de -ing, mesmo sem preposição.
## F. PRINTABLES ADICIONAIS (somam-se às Folhas 1-10 já especificadas) `[TUTOR]`

**Folha 11 — Uma palavra, dois trabalhos**
> Comparar em 4 quadros lado a lado: `do` verbo (`I do my homework.`) x `do` auxiliar (`Do you like it?`); `have` posse (`I have a car.`) x `have` auxiliar (`I have worked here.`); `be` verbo principal (`She is a teacher.`) x `be` auxiliar do contínuo (`She is working now.`); `can` significado (capacidade) + função modal (`Can you help me?`).

**Folha 12 — Quem carrega a informação?**
| Informação | Quem carrega? |
|---|---|
| pergunta no presente | do/does |
| pergunta no passado | did |
| terceira pessoa afirmativa | verbo + s/es/ies |
| passado afirmativo regular | verbo + ed |
| capacidade | can |
| conselho | should |
| hipótese/polidez | would |
| estado/identidade | be |
| experiência/resultado | have + particípio |

**Folha 13 — O mapa de "What do you do?"**
> Página inteira dedicada a desmontar `What + do + you + do + ?` peça por peça (reaproveitar a Dúvida 1, seção B, como conteúdo desta folha).

**Folha 14 — WH-word não substitui auxiliar**
> Comparação vertical: `Do you work remotely?` / `Where do you work?` / `Why do you work remotely?` / `What do you do?` — destacando visualmente que o auxiliar `do` se repete em todas.

---

## G. NOVOS CARDS DA HOME (substituem/complementam os acessos rápidos anteriores)

Cards principais, nesta ordem de prioridade visual:
1. **🧠 Dúvidas que travaram a Amanda** (destaque máximo — não deve ficar escondida dentro de outro módulo)
2. **🔊 Áudios da aula** (atalho para qualquer microaula com áudio pendente de revisão)
3. **🎯 English for Interviews**
4. **🖨️ Printables**
5. **🧩 Montando a Frase**
6. **⚙️ Auxiliares e Modais**
7. **▶️ Continuar de onde parei**

(O Mapa Progressivo do Curso e a trilha "Como a Frase Funciona" continuam acessíveis pelo menu principal, não precisam de card próprio na Home.)

---

## H. REGRA PERMANENTE PARA A ETIQUETA `[REAL]`

Antes de marcar qualquer afirmação como `[REAL]` em qualquer parte do toolkit (inclusive se novos módulos forem adicionados depois):
1. Confirmar nos arquivos fornecidos por Amanda.
2. Preservar cargo, empresa, formação e resultado exatos, sem arredondar ou embelezar.
3. Nunca completar lacunas com suposição, mesmo que pareça "razoável".
4. Quando faltar confirmação, usar `[EDITÁVEL]` — nunca `[REAL]` por padrão.

---

## I. ENTREGA ESPERADA — VERSÃO FINAL REVISADA

1. `english_toolkit_amanda.html` — funcional localmente, sem servidor.
2. `README.txt` — instruções de uso e estrutura de pastas.
3. `audio_manifest.json` — entregue junto (ver arquivo separado).
4. Pasta `audio/` — apenas se arquivos mp3 reais forem gerados; caso contrário, documentar que o modo ativo é só Web Speech API.
5. Progresso e registro de erros via `localStorage`.
6. Campo "Minha explicação com minhas palavras" em cada uma das 24 microaulas, salvo em `localStorage`.
7. Seção "Dúvidas que travaram a Amanda" com destaque máximo na Home.
8. Dados profissionais corrigidos conforme seção A deste documento (nada de números/rankings inventados).
9. Printables 1 a 14, com impressão seletiva via `@media print`.

### Ordem de prioridade caso a entrega precise ser feita em fases
Se não for possível entregar tudo de uma vez, a primeira versão funcional deve conter, nesta ordem:
1. Home (com os 7 cards da seção G)
2. Dúvidas que travaram a Amanda (pelo menos as Dúvidas 1 a 8, sobre do/does/did — o núcleo do problema)
3. Laboratório Montando a Frase
4. Módulo Do/Does/Did (Grupo A)
5. WH-words
6. Módulo Be (Grupo B)
7. Módulo Have (Grupo D)
8. Modais (Grupo C)
9. Áudio via Web Speech API em todas as microaulas já entregues
10. English for Interviews (com dados corrigidos)
11. Printables principais (Folhas 1 a 4)
12. O restante (Dúvidas 9-24, Printables 5-14, Modo Professor completo, gravação de voz) pode vir na sequência, mantendo a mesma base de código.

**A funcionalidade pedagógica e o conteúdo vêm antes da decoração visual.**
