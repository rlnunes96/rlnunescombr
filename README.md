# rlnunes.com.br

Portfolio de Richard L. Nunes — React + Vite, sem back-end.

## Comandos

```bash
npm run dev      # servidor de desenvolvimento em http://localhost:5173
npm run build    # gera dist/
npm run preview  # serve dist/ localmente
```

## Estrutura

```
design/                  fonte importada do Claude Design (Portfolio.dc.html + runtime)
index.html               shell + fontes Google
src/
  App.jsx                estado de idioma, composição das seções
  index.css              todos os estilos (tokens em :root)
  assets/                logos dos projetos
  components/            Nav, Hero, Skills, Projects, Contact, Footer, Backdrop, CustomCursor
  data/i18n.js           textos PT/EN
  data/content.js        skills, projetos e links de contato
  hooks/useTypewriter.js efeito de digitação do terminal
  hooks/useReveal.js     fade-in das seções ao entrar na viewport
  lib/media.js           checagens de prefers-reduced-motion e pointer
```

`design/` é a fonte de referência exportada do projeto Claude Design e não entra no
bundle — mantida para comparar o resultado com o desenho original.

## Editando conteúdo

- Textos de interface (PT e EN): `src/data/i18n.js`
- Skills, projetos e links de contato: `src/data/content.js`
- Cores, fontes e espaçamentos: bloco `:root` no topo de `src/index.css`

Projetos com `link: '#'` são renderizados sem `target="_blank"`; ao preencher uma
URL real o card passa a abrir em nova aba automaticamente.

Na capa do card, o projeto pode usar `logo` (importe o arquivo de `src/assets/` e
passe também um `logoAlt`) ou `icon` com um emoji — quando há `logo`, ele tem
prioridade sobre o `icon`.

## Deploy

Saída estática em `dist/`. No Cloudflare Pages: build command `npm run build`,
output directory `dist`.
