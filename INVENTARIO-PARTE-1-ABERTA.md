# Inventário — Parte 1 aberta (`content-data-open.js`)

Entrega preparada por Gabi para atualização do PWA English Toolkit.
**Não implementa o PWA, não altera Supabase, não mistura com Módulos 4/5.**

## Escopo

| Item | Quantidade | IDs |
|---|---:|---|
| Etapa | 1 (sem conteúdo de lição — ver `CONFLITOS-E-LACUNAS.md`) | `stage_0` |
| Módulos | 3 | `module_1`, `module_2`, `module_3` |
| Lições | 9 | `module_1_lesson_1..3`, `module_2_lesson_1..3`, `module_3_lesson_1..3` |
| Checkpoints | 3 | `module_1_checkpoint`, `module_2_checkpoint`, `module_3_checkpoint` |
| Itens de áudio sintetizado | 285 | `audio_*` (ver `PART_1_OPEN_AUDIO`) |

Todos com `required_day: 1`, conforme pedido (Etapa 0 + Módulos 1, 2, 3
liberados desde o primeiro dia).

## Módulo 1 — Entrar em uma conversa (`module_1`)

| Lição | ID | Componentes fixos presentes | Tipos de atividade (Pratique com apoio) |
|---|---|---|---|
| 1. Cumprimentar e se despedir | `module_1_lesson_1` | 10 de 11 (sem Revisão — é a 1ª lição do percurso, isenção documentada na fonte) | escolha_por_contexto, ordenar, verdadeiro_falso |
| 2. Dizer quem você é | `module_1_lesson_2` | 11/11 | completar, transformar, compreensao_texto, associar |
| 3. Apresentar outra pessoa | `module_1_lesson_3` | 11/11 | escolha_por_contexto, una_as_informacoes, completar, encontre_o_erro |

Checkpoint 1: Partes A (completar, 6 itens) + B (encontre_o_erro, 6 itens) +
C (produção livre, 6 requisitos). Critério: 9/12 itens objetivos + produção.

**Nota de QA:** a Lição 1 tem só 3 tipos de atividade distintos na fonte
(não 4) — está assim no documento aprovado, não foi um erro desta
transcrição. Ver `CONFLITOS-E-LACUNAS.md`, item 2.

## Módulo 2 — Trocar informações e manter a conversa (`module_2`)

| Lição | ID | Tipos de atividade |
|---|---|---|
| 4. Soletrar e informar dados pessoais | `module_2_lesson_1` | completar, transformar, verdadeiro_falso, associar |
| 5. Fazer perguntas essenciais | `module_2_lesson_2` | completar, escolha_por_contexto, transformar, verdadeiro_falso |
| 6. Falar de preferências e sustentar small talk | `module_2_lesson_3` | completar, escolha_por_contexto, verdadeiro_falso, una_as_informacoes |

Checkpoint 2: Partes A (completar, 6 itens) + B (encontre_o_erro, 6 itens,
item 4 reaplica erro do Checkpoint 1) + C (produção livre, 5 requisitos).
Critério: 9/12 + produção. Marca o fim da "Parte 1" pedagógica original
(distinta da "Parte 1 aberta" desta entrega técnica — ver nota abaixo).

## Módulo 3 — Organizar tempo, rotina e planos (`module_3`)

| Lição | ID | Tipos de atividade |
|---|---|---|
| 7. Horas, datas e compromissos | `module_3_lesson_1` | escolha_por_contexto, completar, associar, verdadeiro_falso |
| 8. Rotina e frequência | `module_3_lesson_2` | completar, transformar, ordenar, verdadeiro_falso |
| 9. Hobbies, convites e habilidades | `module_3_lesson_3` | completar, escolha_por_contexto, verdadeiro_falso, una_as_informacoes |

Checkpoint 3: Partes A (completar, 6 itens) + B (encontre_o_erro, 6 itens,
item 4 reaplica erro do Checkpoint 2) + C (produção livre, 5 requisitos).
Critério: 9/12 + produção.

A partir deste módulo, a abertura de cada lição usa tradução-resumo em
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

**Não foi colocado áudio em:** instruções operacionais (`in_app`, `if_stuck`),
gabaritos/feedbacks (`answer`, `feedback`, `gabarito_note`), critérios de
conclusão (`check_progress`, `completion_criterion`), texto em português
(traduções, notas, `atencao`/`dica` explicativas), e frases de "Cheque seu
avanço" — conforme pedido.

## Verificações feitas antes da entrega (todas passaram)

- [x] Presença integral dos 9 conteúdos de lição
- [x] Presença dos 3 checkpoints
- [x] IDs únicos: 77 IDs estruturais + 285 IDs de áudio, **zero duplicados**
- [x] Nenhuma referência a Entrevistas (só nas próprias notas de exclusão)
- [x] Nenhum conteúdo dos Módulos 4 e 5 (só citados como exclusão em metadados)
- [x] Nenhum campo de áudio sem texto
- [x] Idioma de todos os 285 áudios: `en-US`
- [x] Nenhuma referência a `.mp3` ou caminho de arquivo de áudio inexistente
- [x] Correspondência texto exibido ↔ texto falado: 137 falas de diálogo
      checadas programaticamente, zero divergências
- [x] Sintaxe JS válida (`node --check`)

Comando de verificação usado (reproduzível): `node --check content-data-open.js`
e os scripts de checagem descritos acima, disponíveis em
`/tmp/.../scratchpad/content-open/build.py` desta sessão (não versionado —
script de geração, não faz parte da entrega em si).
