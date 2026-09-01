# Inventário — Parte 1 aberta (`content-data-open.js`)

Entrega preparada por Gabi para atualização do PWA English Toolkit.
**Não implementa o PWA, não altera Supabase, não mistura com Módulos 4/5.**

**v2 — correções fechadas pelo Codex após conferência da v1:**
1. Etapa 0 construída por completo (deixou de ser stub).
2. 4º tipo de atividade adicionado à Lição 1 do Módulo 1 (`associar`).
3. Encerramento da Parte 1 movido do Checkpoint 2 para o Checkpoint 3, com
   texto cobrindo as competências reais dos 3 módulos.

## Escopo

| Item | Quantidade | IDs |
|---|---:|---|
| Etapa | 1, completa | `stage_0` |
| Módulos | 3 | `module_1`, `module_2`, `module_3` |
| Lições | 9 | `module_1_lesson_1..3`, `module_2_lesson_1..3`, `module_3_lesson_1..3` |
| Checkpoints | 3 | `module_1_checkpoint`, `module_2_checkpoint`, `module_3_checkpoint` |
| Itens de áudio sintetizado | 285 | `audio_*` (ver `PART_1_OPEN_AUDIO`) |

Todos com `required_day: 1`, conforme pedido (Etapa 0 + Módulos 1, 2, 3
liberados desde o primeiro dia).

## Etapa 0 — Comece aqui (`stage_0`)

Reescrita por completo nesta versão. Não é uma lição de inglês — é
orientação de uso do produto, sem nota e sem introduzir conteúdo de
inglês novo, conforme o objetivo original (preservado verbatim de
`MAPA-15-LICOES-5-CHECKPOINTS.md`).

3 passos (`steps`), cada um com ID estável:
- `stage_0_step_audio_test` — testa o áudio, reaproveitando o áudio já
  existente da abertura da Lição 1 (`audio_module_1_lesson_1_opening_line_1`)
  — não é um áudio novo.
- `stage_0_step_demo_activity` — uma atividade de demonstração sem nota
  (`criterion: "sem_nota"`), reaproveitando o primeiro item de
  `module_1_lesson_1_practice_1` — mesmo conteúdo, não conta para o
  progresso da lição real.
- `stage_0_step_find_review` — orientação textual sobre onde fica a fila
  de Revisão.

Sem critério de avanço nem produção (`criterion: null`) — é orientação,
não avaliação.

## Módulo 1 — Entrar em uma conversa (`module_1`)

| Lição | ID | Componentes fixos presentes | Tipos de atividade (Pratique com apoio) |
|---|---|---|---|
| 1. Cumprimentar e se despedir | `module_1_lesson_1` | 10 de 11 (sem Revisão — é a 1ª lição do percurso, isenção documentada na fonte) | escolha_por_contexto, ordenar, verdadeiro_falso, **associar (novo)** |
| 2. Dizer quem você é | `module_1_lesson_2` | 11/11 | completar, transformar, compreensao_texto, associar |
| 3. Apresentar outra pessoa | `module_1_lesson_3` | 11/11 | escolha_por_contexto, una_as_informacoes, completar, encontre_o_erro |

Checkpoint 1: Partes A (completar, 6 itens) + B (encontre_o_erro, 6 itens) +
C (produção livre, 6 requisitos). Critério: 9/12 itens objetivos + produção.

**Correção aplicada (v2):** a Lição 1 agora tem 4 tipos de atividade, como
as outras 8. A nova atividade (`module_1_lesson_1_practice_4`, tipo
`associar`) liga cada expressão de cumprimento/despedida já ensinada na
lição ao momento em que ela é usada — conteúdo 100% derivado do que já
estava em `understand` (nenhuma estrutura ou vocabulário novo). Sem áudio
novo: as expressões usadas (Good morning, Good evening, Good night, See
you later) já têm áudio em `words_to_use`/tabelas da própria lição, e
atividades de associação são lidas, não ouvidas — mesmo padrão das outras
atividades `associar` do arquivo.

## Módulo 2 — Trocar informações e manter a conversa (`module_2`)

| Lição | ID | Tipos de atividade |
|---|---|---|
| 4. Soletrar e informar dados pessoais | `module_2_lesson_1` | completar, transformar, verdadeiro_falso, associar |
| 5. Fazer perguntas essenciais | `module_2_lesson_2` | completar, escolha_por_contexto, transformar, verdadeiro_falso |
| 6. Falar de preferências e sustentar small talk | `module_2_lesson_3` | completar, escolha_por_contexto, verdadeiro_falso, una_as_informacoes |

Checkpoint 2: Partes A (completar, 6 itens) + B (encontre_o_erro, 6 itens,
item 4 reaplica erro do Checkpoint 1) + C (produção livre, 5 requisitos).
Critério: 9/12 + produção.

**Correção aplicada (v2):** removida a nota "Fim da Parte 1" deste
checkpoint (`part_end_note`) — esse texto foi movido para o Checkpoint 3,
que é onde a Parte 1 desta entrega técnica (Etapa 0 + Módulos 1-3)
realmente termina.

## Módulo 3 — Organizar tempo, rotina e planos (`module_3`)

| Lição | ID | Tipos de atividade |
|---|---|---|
| 7. Horas, datas e compromissos | `module_3_lesson_1` | escolha_por_contexto, completar, associar, verdadeiro_falso |
| 8. Rotina e frequência | `module_3_lesson_2` | completar, transformar, ordenar, verdadeiro_falso |
| 9. Hobbies, convites e habilidades | `module_3_lesson_3` | completar, escolha_por_contexto, verdadeiro_falso, una_as_informacoes |

Checkpoint 3: Partes A (completar, 6 itens) + B (encontre_o_erro, 6 itens,
item 4 reaplica erro do Checkpoint 2) + C (produção livre, 5 requisitos).
Critério: 9/12 + produção.

**Correção aplicada (v2):** este checkpoint agora carrega o
`part_end_note` de encerramento da Parte 1 — texto novo, sintetizando as
competências reais dos 3 módulos (a partir das frases de `outcome` já
aprovadas de cada módulo, sem inventar competência nova):

> Fim da Parte 1: ao concluir o Checkpoint 3, você encerra a Parte 1 do
> English Tool — você já consegue iniciar uma interação, se apresentar e
> apresentar outra pessoa, trocar dados básicos (nome soletrado, telefone,
> e-mail), fazer perguntas essenciais e falar de preferências para manter
> uma conversa breve, e organizar tempo e planos: dizer horas e datas,
> marcar um compromisso, descrever sua rotina, e convidar, aceitar ou
> recusar de forma educada — tudo com apoio.

A partir do Módulo 3, a abertura de cada lição usa tradução-resumo em
itálico (`translation.type: "summary"`), não mais o bloco paralelo linha a
linha dos Módulos 1-2 (`translation.type: "parallel"`) — mudança de padrão
já registrada na fonte, preservada aqui, não decidida por mim.

## Áudio sintetizado — cobertura por regra

| Regra (do pedido) | Onde foi aplicada |
|---|---|
| 1. Diálogos em inglês (linha + completo) | `opening.dialogue` e cada `see_it_working[].dialogue` das 9 lições + 3 checkpoints — `audio_id` por fala, `full_audio_id` para o diálogo inteiro |
| 2. Frases-modelo essenciais (natural + lenta) | Frases em destaque nas seções `understand` (ex.: "How are you?", "I am 16 years old.") — versão lenta (`rate:0.72`) adicionada onde a lição tem atividade de repetição ("Fale comigo") em `in_app` |
| 3. Listening (natural, transcrição oculta) | Diálogos de `see_it_working` funcionam como base para as atividades "Ouça e..." descritas em `in_app`; transcrição fica no próprio campo `en`, não exposta por padrão na UI (decisão de exibição é do PWA, não deste arquivo) |
| 4. Atividades de repetição | Mesmas frases-modelo do item 2, reaproveitadas — sem duplicar conteúdo |
| 5. Palavras/expressões com forma falada necessária | `words_to_use[]` (frase-exemplo de cada palavra, todas as lições) + tabela do alfabeto e tabela de números da Lição 4 (letra/número isolado, além da frase) |

Etapa 0 não adiciona nenhum áudio novo — reaproveita
`audio_module_1_lesson_1_opening_line_1`, já existente. A nova atividade
da Lição 1 (`associar`) também não adiciona áudio, pelo motivo explicado
acima. Por isso a contagem total de áudio permanece 285 nesta v2.

**Não foi colocado áudio em:** instruções operacionais (`in_app`, `if_stuck`),
gabaritos/feedbacks (`answer`, `feedback`, `gabarito_note`), critérios de
conclusão (`check_progress`, `completion_criterion`), texto em português
(traduções, notas, `atencao`/`dica` explicativas), e frases de "Cheque seu
avanço" — conforme pedido.

## Verificações feitas antes da entrega (todas passaram, v2)

- [x] Presença integral dos 9 conteúdos de lição
- [x] Presença dos 3 checkpoints
- [x] Etapa 0 completa (não é mais stub)
- [x] Lição 1 do Módulo 1 com 4 tipos de atividade distintos
- [x] "Fim da Parte 1" presente só no Checkpoint 3, ausente do Checkpoint 2
- [x] IDs únicos: 81 IDs estruturais + 285 IDs de áudio, **zero duplicados**
- [x] Nenhuma referência a Entrevistas (só nas próprias notas de exclusão)
- [x] Nenhum conteúdo dos Módulos 4 e 5 (só citados como exclusão em metadados)
- [x] Nenhum campo de áudio sem texto
- [x] Idioma de todos os 285 áudios: `en-US`
- [x] Nenhuma referência a `.mp3` ou caminho de arquivo de áudio inexistente
- [x] `demo_audio_id` da Etapa 0 aponta para um `audio_id` que de fato existe
      em `PART_1_OPEN_AUDIO`
- [x] Correspondência texto exibido ↔ texto falado: 137 falas de diálogo
      checadas programaticamente, zero divergências
- [x] Sintaxe JS válida (`node --check`)
- [x] Etapa 0 e Módulos 1, 2, 3 com `required_day: 1`

Comando de verificação usado (reproduzível): `node --check content-data-open.js`
e os scripts de checagem descritos acima, disponíveis em
`/tmp/.../scratchpad/content-open/build.py` desta sessão (não versionado —
script de geração, não faz parte da entrega em si).
