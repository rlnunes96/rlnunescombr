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
public/_redirects        fallback de SPA (todas as rotas caem no index.html)
src/
  App.jsx                idioma, rotas e controle de scroll
  index.css              todos os estilos (tokens em :root)
  assets/                logos dos projetos
  pages/Home.jsx         a landing page (hero, skills, projetos, contato)
  pages/ProjectPage.jsx  página de um projeto: preview em iframe + informações
  components/            Nav, Hero, Skills, Projects, Contact, Footer, Backdrop,
                         CustomCursor, TerminalWindow
  data/i18n.js           textos de interface PT/EN
  data/content.js        skills, projetos e links de contato
  hooks/useTypewriter.js efeito de digitação do terminal
  hooks/useReveal.js     fade-in das seções ao entrar na viewport
  lib/media.js           checagens de prefers-reduced-motion e pointer
```

`design/` é a fonte de referência exportada do projeto Claude Design e não entra no
bundle — mantida para comparar o resultado com o desenho original.

## Rotas

| Rota | Página |
| --- | --- |
| `/` | landing page |
| `/projetos/<slug>` | projeto com preview em iframe (ex.: `/projetos/spfc-stats`) |
| qualquer outra | 404 |

São rotas de cliente (React Router). Por isso o `public/_redirects` existe: sem ele
o servidor devolveria 404 ao abrir `/projetos/spfc-stats` direto na barra de endereço.

## Editando conteúdo

- Textos de interface (PT e EN): `src/data/i18n.js`
- Skills, projetos e links de contato: `src/data/content.js`
- Cores, fontes e espaçamentos: bloco `:root` no topo de `src/index.css`

Na capa do card, o projeto pode usar `logo` (importe o arquivo de `src/assets/` e
passe também um `logoAlt`) ou `icon` com um emoji — quando há `logo`, ele tem
prioridade sobre o `icon`.

### Para onde o card aponta

1. Tem `slug` → vai para a página interna `/projetos/<slug>`, na mesma aba.
2. Sem `slug`, mas com `link` real → abre o site em nova aba.
3. Sem `slug` e com `link: '#'` → é só um placeholder, não navega.

### Dando uma página a um projeto

Adicione `slug` e um objeto `detail` ao projeto em `src/data/content.js`. O
cabeçalho de cada bloco (`Sobre o projeto`, `Tecnologias usadas`, `Funcionalidades`)
vem do `i18n.js` e é traduzido; o conteúdo dentro de `detail` é texto livre seu.
Os campos estão comentados no topo do arquivo.

O preview carrega o site publicado dentro de um `<iframe>`. Isso só funciona se o
site permitir — se ele mandar `X-Frame-Options` ou `Content-Security-Policy:
frame-ancestors`, o navegador bloqueia e a janela fica em branco. Por isso o botão
`abrir em nova aba` fica sempre visível na barra da janela.

## Deploy

Saída estática em `dist/`.

**Firebase Hosting** (padrão):

```bash
npm run deploy
```

Roda o build e publica. O `firebase.json` já faz o rewrite de `**` para
`/index.html` — é o que faz `/projetos/<slug>` funcionar quando alguém abre a
URL direto. Assets com hash no nome vão com cache de 1 ano; o `index.html` vai
com `no-cache`, senão o navegador serviria a versão velha depois de um deploy.

Se as credenciais expirarem, `firebase login --reauth`.

**Cloudflare Pages** (alternativa): build command `npm run build`, output
directory `dist`. O `public/_redirects` cobre o mesmo fallback de SPA.
