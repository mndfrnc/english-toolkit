# Conflitos e lacunas encontrados — entrega Parte 1 aberta

Nenhum destes pontos foi resolvido silenciosamente. `content-data-open.js`
preserva o conteúdo das fontes exatamente como está — as decisões abaixo
precisam ser tomadas por vocês antes ou depois de usar o arquivo.

## 1. Etapa 0 não tem conteúdo de lição autoral

A única fonte encontrada para "Etapa 0: Comece aqui" é uma frase de
objetivo em `MAPA-15-LICOES-5-CHECKPOINTS.md`:

> Objetivo: aluno entende o produto, testa áudio, responde a uma atividade
> sem nota, localiza a revisão. Não introduz conteúdo de inglês novo — usa
> exemplos das lições seguintes apenas como demonstração.

Não existe diálogo, atividade, produção, revisão, critério de avanço ou
gabarito desenvolvidos para essa etapa em nenhum documento aprovado ou
candidato desta sessão. `STAGE_0` no arquivo entregue é só a estrutura +
esse objetivo, com `lessons: []`.

**Não inventei conteúdo para preencher isso** (instrução explícita: não
reescrever/inventar pedagogicamente). Se a Etapa 0 precisa existir na
entrega inicial com conteúdo real, alguém precisa escrevê-la primeiro —
não é algo que eu deva decidir ou fabricar aqui.

## 2. Lição 1 do Módulo 1 tem só 3 tipos de atividade, não 4

O pedido desta entrega diz "pelo menos 4 tipos variados de exercício por
lição". Mas `PADRAO-PEDAGOGICO-UNICO.md` (seção 5, a régua oficial já
aprovada) diz "pelo menos 3 tipos diferentes". E a fonte real da Lição 1
(`ENGLISH-TOOL-MODULO-1-REVISADO.md`, já aprovada) tem exatamente 3
atividades de "Pratique com apoio": escolha por contexto, ordenar,
verdadeiro/falso — nenhuma quarta atividade.

Todas as outras 8 lições (Módulo 1 Lições 2-3, Módulo 2 completo, Módulo 3
completo) já têm 4 tipos distintos na fonte. Só a Lição 1 diverge.

**Não adicionei uma quarta atividade inventada** à Lição 1 para bater com
o número 4 — isso seria alterar conteúdo já aprovado, que a instrução
desta entrega proíbe explicitamente ("não altere decisões já aprovadas").
Três caminhos possíveis, a decidir por vocês:
(a) aceitar a Lição 1 com 3 tipos, já que é a exceção documentada e o
padrão oficial permite 3 como mínimo; (b) pedir uma 4ª atividade nova para
a Lição 1, revisada e aprovada como as demais; (c) atualizar o padrão de
4 tipos para valer só a partir da entrega seguinte.

## 3. Duas definições diferentes de "Parte 1" convivendo no material

A fonte pedagógica original (`MAPA-15-LICOES-5-CHECKPOINTS.md`) define
"Parte 1" como Módulos 1-2 e "Parte 2" como Módulos 3-5. O texto do
Checkpoint 2, preservado verbatim em `content-data-open.js`
(`module_2_checkpoint.part_end_note`), ainda diz "Fim da Parte 1" nesse
sentido antigo.

Esta entrega técnica usa "Parte 1" com outro sentido: Módulos 1, 2 **e 3**
juntos, como o conteúdo aberto/gratuito, com Módulos 4-5 como "Parte 2"
bloqueada por gate. Ou seja, o Módulo 3 está tecnicamente na "Parte 1"
desta entrega, mas o texto pedagógico dentro dele (herdado do Checkpoint 2)
ainda fala de uma "Parte 1" que termina antes dele.

Não editei esse texto — é conteúdo pedagógico aprovado, fora do escopo
desta tarefa mexer. Mas acho que vale alguém decidir se isso confunde o
aluno na prática (ele vê "Fim da Parte 1" no meio do que agora é
tecnicamente ainda a Parte 1 aberta) e, se sim, pedir o ajuste de texto
pelo canal normal de revisão pedagógica — não aqui.

## 4. Decisão de escopo na marcação de áudio (transparente, não uma alteração de conteúdo)

A regra 2 do pedido ("frases-modelo essenciais... versão natural e versão
lenta quando houver atividade de repetição ou análise de estrutura") exige
julgamento sobre o que conta como "essencial" — nem toda frase em inglês
das seções "Entenda" virou áudio, só as que aparecem destacadas em bloco
de citação como exemplo central. Marquei sistematicamente: diálogos de
abertura e de "Veja funcionando" (linha a linha + completo), a frase-
exemplo de cada item de "Palavras para usar", frases-modelo destacadas nas
seções "Entenda", e a tabela de alfabeto/números da Lição 4 (item por
item, porque a forma falada é o próprio conteúdo da lição). Não marquei
toda tabela pedagógica linha a linha fora desses casos, para não violar a
proibição explícita de áudio em "todos os parágrafos da lição". Detalhe
completo da cobertura está em `INVENTARIO-PARTE-1-ABERTA.md`.

## 5. `content-data.js` (existente) e `content-data-open.js` (esta entrega) não se falam

O `content-data.js` atual do repositório é um sistema de conteúdo
diferente e mais antigo (tópicos de dúvidas do/does/did, microlições,
inclui inclusive um tópico "interview"/Entrevistas). Não toquei nele.
`content-data-open.js` é um arquivo novo, independente, sem gate, sem
qualquer lógica de mesclagem com o conteúdo antigo — como pedido
explicitamente ("não implemente o gate", "não misture o conteúdo").
Quem for integrar isso ao PWA de fato vai precisar decidir como (ou se)
os dois sistemas de conteúdo convivem.
