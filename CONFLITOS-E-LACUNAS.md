# Conflitos e lacunas — entrega Parte 1 aberta

Nenhum ponto abaixo foi resolvido silenciosamente. Itens 1-3 foram
**fechados pelo Codex** nesta v2, após conferência direta da v1; ficam
registrados como histórico, não como pendência. Itens 4-5 continuam
válidos e não são bloqueantes.

## 1. [RESOLVIDO em v2] Etapa 0 não tinha conteúdo de lição autoral

**Status na v1:** a única fonte era uma frase de objetivo em
`MAPA-15-LICOES-5-CHECKPOINTS.md`, sem diálogo, atividade, produção ou
critério de avanço desenvolvidos.

**Resolução (Codex, v2):** Etapa 0 construída por completo — 3 passos
(`stage_0_step_audio_test`, `stage_0_step_demo_activity`,
`stage_0_step_find_review`), preservando o objetivo original verbatim e
sem introduzir nenhum conteúdo de inglês novo, conforme o próprio
objetivo exige ("usa exemplos das lições seguintes apenas como
demonstração"). O teste de áudio e a atividade de demonstração
reaproveitam, respectivamente, um `audio_id` e um item já existentes na
Lição 1 do Módulo 1 — não são conteúdo novo, não somam ao progresso
daquela lição, e não alteram o escopo dos Módulos 1, 2 ou 3. Sem
critério de avanço (é orientação, não avaliação). Detalhe completo em
`INVENTARIO-PARTE-1-ABERTA.md`.

## 2. [RESOLVIDO em v2] Lição 1 do Módulo 1 tinha só 3 tipos de atividade

**Status na v1:** a fonte aprovada (`ENGLISH-TOOL-MODULO-1-REVISADO.md`)
tinha só 3 tipos de "Pratique com apoio" nessa lição, contra o mínimo de
4 pedido nesta entrega (o padrão oficial pede mínimo 3).

**Resolução (Codex, v2):** adicionada `module_1_lesson_1_practice_4`
(tipo `associar`), ligando cada expressão de cumprimento/despedida já
ensinada na lição ao momento em que é usada — conteúdo inteiramente
derivado do que já estava na seção `understand` da própria lição, sem
introduzir estrutura ou vocabulário novo. ID estável, integrada ao array
`guided_practice` (mesmo mecanismo de progresso das demais atividades).
Sem áudio novo: as expressões envolvidas já têm áudio em outros pontos
da lição, e atividades de associação não exigem que o texto seja ouvido
para ser executada — mesmo padrão já usado nas outras atividades
`associar` do arquivo (nenhuma delas tem áudio dedicado).

## 3. [RESOLVIDO em v2] Duas definições de "Parte 1" convivendo

**Status na v1:** o Checkpoint 2 (fonte: `ENGLISH-TOOL-MODULO-2-...md`)
dizia "Fim da Parte 1" no sentido pedagógico original (Módulos 1-2),
mas esta entrega técnica trata Parte 1 como Etapa 0 + Módulos 1-3.

**Resolução (Codex, v2):** removida a frase "Fim da Parte 1" do
Checkpoint 2 (`module_2_checkpoint` não tem mais `part_end_note`).
Adicionado `part_end_note` ao Checkpoint 3, com texto novo sintetizando
as competências reais dos 3 módulos — construído a partir das frases de
`outcome` já aprovadas de cada módulo (Módulo 1: cumprimentar,
apresentar-se, apresentar outra pessoa; Módulo 2: soletrar e informar
dados, perguntas essenciais, preferências; Módulo 3: horas e datas,
compromissos, rotina, convites), sem inventar nenhuma competência que os
módulos não trabalhem de fato.

## 4. Decisão de escopo na marcação de áudio (transparente, não uma alteração de conteúdo)

A regra 2 do pedido original ("frases-modelo essenciais... versão
natural e versão lenta quando houver atividade de repetição ou análise
de estrutura") exige julgamento sobre o que conta como "essencial" — nem
toda frase em inglês das seções "Entenda" virou áudio, só as que
aparecem destacadas em bloco de citação como exemplo central. Marquei
sistematicamente: diálogos de abertura e de "Veja funcionando" (linha a
linha + completo), a frase-exemplo de cada item de "Palavras para usar",
frases-modelo destacadas nas seções "Entenda", e a tabela de
alfabeto/números da Lição 4 (item por item, porque a forma falada é o
próprio conteúdo da lição). Não marquei toda tabela pedagógica linha a
linha fora desses casos, para não violar a proibição explícita de áudio
em "todos os parágrafos da lição". A mesma régua foi aplicada à nova
atividade da Lição 1 (item 2 acima) e à Etapa 0. Detalhe completo da
cobertura está em `INVENTARIO-PARTE-1-ABERTA.md`.

## 5. `content-data.js` (existente) e `content-data-open.js` (esta entrega) não se falam

O `content-data.js` atual do repositório é um sistema de conteúdo
diferente e mais antigo (tópicos de dúvidas do/does/did, microlições,
inclui inclusive um tópico "interview"/Entrevistas). Não foi tocado em
nenhuma das duas versões desta entrega. `content-data-open.js` continua
sendo um arquivo novo, independente, sem gate, sem qualquer lógica de
mesclagem com o conteúdo antigo — como pedido explicitamente ("não
implemente o gate", "não misture o conteúdo", reafirmado nesta v2). Quem
for integrar isso ao PWA de fato vai precisar decidir como (ou se) os
dois sistemas de conteúdo convivem.
