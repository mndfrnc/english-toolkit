# Registro de sessão — English Tool (01/09/2026)

Resumo do trabalho feito nesta sessão do Claude Code, para dar contexto a
qualquer sessão futura (Codex, outra sessão de Claude Code, ou humano) sem
depender do histórico de chat original.

## Pessoas e papéis envolvidos

- **Amanda** — dona do produto, decide aprovação comercial e pedagógica.
- **Codex** — agente coordenador que faz QA e acompanha o projeto em paralelo.
- **Bruno / Claude Design** — diagramação visual da apostila (Parte 1: Módulos 1-3).
- **"Jams" (Claude.ai)** — refez o HTML da apostila Parte 1 depois de uma
  primeira tentativa incompleta.
- **Gabi** — desenvolvedora anterior do projeto, autora do runtime `.dc.html`
  usado no site.

## 1. Conteúdo pedagógico (apostila English Tool)

Documentação completa está no Google Drive, pasta **Documentação Pedagógica**
dentro de `02 - English Toolkit`
(https://drive.google.com/drive/folders/1IeQkFc43U8QPY-Lf5QO-D01DuQMEomLm):

- `PADRAO-PEDAGOGICO-UNICO.md` — padrão único: 11 componentes fixos por
  lição, regra de variedade de exercícios (mín. 4 tipos distintos, nunca
  repetir o mesmo tipo na mesma lição), critério de avanço 75% + produção.
- `MAPA-15-LICOES-5-CHECKPOINTS.md` — mapa de progressão e reciclagem das
  15 lições / 5 checkpoints, sem duplicação de estrutura central.
- Módulos 1 a 5 (revisado/reconstruídos), cada um com lições, checkpoint,
  gabarito comentado e especificação técnica das atividades do PWA.
- Dois arquivos de QA (`QA-FINAL-MODULO-2...`, `QA-CONJUNTO-MODULOS-3-A-5.md`)
  documentando correções objetivas aplicadas (matemática de critérios,
  repetição mecânica de tipo de exercício, componentes faltando).
- Nenhum destes módulos está aprovado comercialmente — são material de
  trabalho, sujeitos a QA do Codex/Amanda.

## 2. Imagens pedagógicas (12 imagens do e-book)

- Geradas via **Gemini**, não ChatGPT — achado importante: o Gemini **regenera
  do zero** a cada pedido (usa anexos só como referência de estilo), não edita
  a imagem existente. O padrão que funcionou foi pedir "Crie uma nova
  ilustração..." com o texto final já especificado no prompt, anexando 1-2
  imagens de referência por vez (não a pasta inteira).
- Todas as 12 imagens confirmadas com o texto correto nos balões.
- Fonte definida como padrão daqui pra frente: **Nunito** (ExtraBold caixa
  alta para rótulos de uma palavra; Regular/SemiBold para frases de diálogo),
  como meio-termo entre os dois estilos que saíram divergentes nas primeiras
  imagens.
- Pasta das imagens: https://drive.google.com/drive/folders/1huQi6sC5fEtXo8gxnbM4MS240wtFmxJl

## 3. Diagramação — Parte 1 (Módulos 1, 2, 3)

- Consolidados os 3 módulos num `.docx` com sumário e as 6 imagens
  embutidas, enviado para Bruno diagramar.
- Duas tentativas de Bruno ficaram incompletas (uma só com o Módulo 1 completo
  mas parou aí; outra com a identidade visual quase certa mas conteúdo
  resumido, faltando componentes inteiros e nenhum gabarito).
- A versão final, refeita por "Jams" (Claude.ai), foi revisada e está
  **aprovada**: conteúdo completo das 9 lições + 3 gabaritos, paleta 100%
  dentro do aprovado (`#E6532F`, `#2F4DA6`, `#8B3A2B`, `#FFFBF7`, `#E8F0FF`),
  6 imagens + capa embutidas em base64, A4 print-ready. Pronta para gerar o
  e-book.
- Parte 2 (Módulos 4-5) ainda não entrou em diagramação.

## 4. Domínio e tutorial de instalação

- Domínio conectado no Netlify: **https://www.englishtool.com.br**
- Criado um tutorial de instalação do PWA (Artifact HTML) com capturas reais
  de tela para os 3 fluxos: iPhone/Safari, iPhone/Chrome, Android/Chrome.

## 5. Este repositório (`english-toolkit`)

- Estado anterior: 1 commit antigo (`e58bceb`), desatualizado em relação ao
  projeto real.
- Sincronizado com a versão local mais atual, fornecida por Amanda via
  `Site e App English Tool - Projeto.zip` (pasta `deploy/` dentro do zip) —
  **cuidado**: existem dois arquivos com esse mesmo nome no Drive; o correto
  é o pequeno (~140 KB, contém `supabase-client.js` e `support.js`), não o
  grande (~19,5 MB, é outra coisa).
- Commit `8cd0ae5`: atualizou `index.html` e `content-data.js`; adicionou
  `supabase-client.js`, `store.js`, `sw.js`, `manifest.json` e os assets do
  PWA (`assets/OriginalSalmon.otf`, `icon-192.png`, `icon-512.png`,
  `background.svg`); removeu artefatos visuais de uma versão anterior do
  design (headers antigos, `.md` de conteúdo de referência), com confirmação
  explícita da Amanda antes de remover. `CNAME` preservado
  (`english.amandafranco.com.br`).
- `support.js` é o **runtime interno do formato `.dc.html`** (Claude/Anthropic
  Design Components) — gerado pela ferramenta, não é código-fonte de
  aplicação, não deve ser editado manualmente. Não existe pasta `dc-runtime/`
  nem build config associado (confirmado por Gabi). Commit `ad627a4` adicionou
  `NOTICE.md` documentando isso.
- Chave presente em `supabase-client.js` é do tipo **publicável** (prefixo
  `sb_publishable_...`), segura para expor no navegador — proteção real é via
  RLS no Supabase. Não é um segredo vazado.
- Não há `package.json` nem `node_modules` — é site estático servido direto
  (HTML/JS/CSS soltos), sem processo de build via npm.

## Pendências conhecidas ao final desta sessão

- Parte 2 (Módulos 4-5) ainda não foi diagramada.
- Nenhum conteúdo pedagógico está aprovado comercialmente — segue como
  material de trabalho.
- Se a Gabi tiver uma versão mais atual do `.md` de conteúdo de referência
  (`Conteudo_English_Toolkit_Amanda_v2.md`, removido deste repo por não fazer
  parte do deploy), vale perguntar se deve ser mantido em algum lugar como
  documentação.
