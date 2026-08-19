import spfcStatsLogo from '../assets/spfc-stats.png';

export const skillGroups = [
  { icon: '⚛️', title: 'Frontend', items: ['React', 'JavaScript', 'HTML/CSS'] },
  { icon: '🔥', title: 'Backend & Cloud', items: ['Firebase', 'Cloudflare', 'PHP'] },
  { icon: '📈', title: 'Growth', items: ['Tráfego Pago', 'SEO', 'Analytics'] },
  { icon: '🎨', title: 'Design', items: ['Photoshop', 'Illustrator', 'UI/UX'] },
];

/*
 * Cada projeto vira um card na home. Campos:
 *
 *   name      título do card
 *   logo      imagem da capa (importe de src/assets/) — tem prioridade sobre `icon`
 *   icon      emoji usado na capa quando não há logo
 *   gradient  fundo da capa
 *   desc      texto curto do card
 *   link      URL do site publicado
 *   slug      define a página interna /projetos/<slug>; sem slug, não há página
 *   detail    conteúdo dessa página (veja abaixo) — livre pra editar
 *
 * Dentro de `detail`:
 *
 *   terminalTitle  texto da barra da janela de terminal que envolve o preview
 *   tagline        frase de abertura da página
 *   about          parágrafos de texto corrido
 *   stack          grupos de tecnologias { group, items[] } — opcional; sem ele
 *                  o bloco some e o "Sobre" ocupa a largura toda
 *   features       lista de funcionalidades { icon, title, desc } — opcional
 */
export const projects = [
  {
    name: 'Loja Virtual',
    slug: 'loja-virtual',
    icon: '🛒',
    link: 'https://vitrine.rlnunes.com.br',
    gradient: 'linear-gradient(135deg,#0f2a24,#0a1119)',
    desc: 'Vitrine de moda com catálogo por categoria, página de produto e sacola que fecha o pedido no WhatsApp.',
    detail: {
      terminalTitle: 'vitrine.rlnunes.com.br',
      tagline:
        'Vitrine online de uma marca de moda, com catálogo por categoria, página de produto e uma sacola que fecha o pedido direto no WhatsApp.',
      about: [
        'O catálogo é organizado por categoria — vestidos, alfaiataria, tricot e acessórios — com busca e filtro. Cada peça tem página própria, com seleção de tamanho, quantidade e o estado de esgotado quando o item acabou.',
        'O checkout não passa por gateway de pagamento: a sacola guarda o pedido e o fechamento acontece no WhatsApp, onde frete e condições são combinados direto com a loja. Para uma operação desse porte isso tira atrito — a cliente não precisa criar cadastro nem digitar dados de cartão para comprar.',
      ],
      features: [
        {
          icon: '🧭',
          title: 'Catálogo por categoria',
          desc: 'Vestidos, alfaiataria, tricot e acessórios, com busca e filtro.',
        },
        {
          icon: '👗',
          title: 'Página de produto',
          desc: 'Seleção de tamanho e quantidade, com aviso de peça esgotada.',
        },
        {
          icon: '🛍️',
          title: 'Sacola',
          desc: 'Resumo do pedido com subtotal e os itens guardados entre visitas.',
        },
        {
          icon: '💬',
          title: 'Fechamento no WhatsApp',
          desc: 'Frete e condições combinados direto com a loja, sem cadastro.',
        },
        {
          icon: '✨',
          title: 'Identidade de vitrine de luxo',
          desc: 'Tipografia serifada, paleta neutra e layout editorial.',
        },
        {
          icon: '📱',
          title: 'Layout responsivo',
          desc: 'Mesma navegação no desktop e no celular, onde a maior parte compra.',
        },
      ],
    },
  },
  {
    name: 'SPFC Stats',
    slug: 'spfc-stats',
    logo: spfcStatsLogo,
    logoAlt: 'SPFC Stats',
    link: 'https://spfc.rlnunes.com.br',
    gradient: 'linear-gradient(135deg,#2a0f14,#0a1119)',
    desc: 'Estatísticas do São Paulo FC: elenco, comparação de jogadores, desempenho por competição, títulos e acompanhamento ao vivo.',
    detail: {
      terminalTitle: 'spfc.rlnunes.com.br',
      tagline:
        'Plataforma de estatísticas do São Paulo FC, com os dados sincronizados automaticamente todos os dias e um assistente que responde perguntas em português.',
      about: [
        'O SPFC Stats junta em um só lugar o elenco atual, o histórico do clube, os títulos, o desempenho por competição e o acompanhamento das partidas. Os dados vêm da API-Football e são gravados no Firestore por rotinas agendadas que rodam sozinhas — o site não depende de atualização manual, inclusive em janela de transferência.',
        'A parte tecnicamente mais interessante é o assistente de perguntas. Em vez de deixar o modelo responder de cabeça, o Gemini recebe a pergunta, decide qual consulta rodar e com quais parâmetros; o código executa essa consulta no Firestore e devolve o resultado pro modelo apenas formatar. Nenhum número é inventado pela IA.',
      ],
      stack: [
        {
          group: 'Front-end',
          items: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Recharts', 'lucide-react'],
        },
        {
          group: 'Back-end',
          items: ['Cloud Functions (Node 20)', 'Firestore', 'Firebase Hosting'],
        },
        {
          group: 'Dados & IA',
          items: ['API-Football', 'Google Gemini', 'Cloud Scheduler'],
        },
      ],
      features: [
        {
          icon: '👥',
          title: 'Elenco e perfil do jogador',
          desc: 'Ficha de cada atleta com bio e estatísticas separadas por temporada.',
        },
        {
          icon: '⚖️',
          title: 'Comparação de jogadores',
          desc: 'Dois atletas lado a lado, incluindo quem já passou pelo clube.',
        },
        {
          icon: '📊',
          title: 'Desempenho por competição',
          desc: 'Brasileirão, Paulista e Sul-Americana com gráficos por temporada.',
        },
        {
          icon: '🏆',
          title: 'Títulos',
          desc: 'Página por conquista, ligando cada título ao elenco campeão.',
        },
        {
          icon: '🗂️',
          title: 'Dados históricos',
          desc: 'Resultados e campanhas do clube desde a fundação.',
        },
        {
          icon: '🔴',
          title: 'Ao vivo e próxima partida',
          desc: 'Rotina diária mantém jogo, adversário e escalação sempre em dia.',
        },
        {
          icon: '🤖',
          title: 'Assistente com IA',
          desc: 'Perguntas em linguagem natural respondidas com dados reais do Firestore.',
        },
      ],
    },
  },
  {
    name: 'Gestão de Academia',
    slug: 'gestao-academia',
    icon: '🥋',
    link: 'https://academia.rlnunes.com.br',
    gradient: 'linear-gradient(135deg,#2a1f0f,#0a1119)',
    desc: 'Sistema para escola de artes marciais: matrículas, turmas, frequência, faturamento e área do aluno.',
    detail: {
      terminalTitle: 'academia.rlnunes.com.br',
      tagline:
        'Sistema de gestão do IDAO — Instituto das Artes Orientais. Junta o site público da escola e dois painéis internos: o do aluno e o administrativo.',
      about: [
        'A parte pública apresenta a escola, os cursos, o calendário e os eventos, com página de contato e cadastro. A partir do login, cada pessoa cai no painel do seu papel — aluno ou administrador — e as rotas de cada área ficam protegidas por esse papel.',
        'O aluno acompanha frequência, faturamento e o Kung Fu em Casa: os cursos em vídeo organizados em etapas, cada uma com suas aulas e provas. O administrador cuida de alunos, turmas, professores e presença, e publica o conteúdo do próprio site — banners, arquivos e eventos — sem depender de deploy.',
      ],
      stack: [
        {
          group: 'Front-end',
          items: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router', 'React Query'],
        },
        {
          group: 'Formulários & dados',
          items: ['React Hook Form', 'Zod', 'date-fns'],
        },
        {
          group: 'Back-end',
          items: ['Firebase Auth', 'Firestore', 'Cloud Storage', 'Firebase Hosting'],
        },
      ],
      features: [
        {
          icon: '🥋',
          title: 'Área do aluno',
          desc: 'Painel próprio com turmas, agenda e o andamento dos cursos.',
        },
        {
          icon: '🎥',
          title: 'Kung Fu em Casa',
          desc: 'Cursos em vídeo divididos em etapas, com aulas e provas por etapa.',
        },
        {
          icon: '📋',
          title: 'Frequência',
          desc: 'Presença lançada por turma e consultada pelo aluno no painel.',
        },
        {
          icon: '💳',
          title: 'Faturamento',
          desc: 'Mensalidades e situação financeira de cada matrícula.',
        },
        {
          icon: '🗓️',
          title: 'Calendário e eventos',
          desc: 'Agenda da escola, com página própria para cada evento.',
        },
        {
          icon: '👥',
          title: 'Alunos, turmas e professores',
          desc: 'Cadastro e edição completos no painel administrativo.',
        },
        {
          icon: '🖼️',
          title: 'Conteúdo pelo admin',
          desc: 'Banners e arquivos do site publicados sem precisar de deploy.',
        },
        {
          icon: '🔐',
          title: 'Acesso por papel',
          desc: 'Rotas de aluno e de administrador protegidas separadamente.',
        },
      ],
    },
  },
];

export const contactLinks = [
  { label: 'contato@rlnunes.com.br', href: 'mailto:contato@rlnunes.com.br', primary: true },
  { label: 'WhatsApp', href: 'https://wa.me/55', external: true },
  { label: 'GitHub', href: 'https://github.com', external: true },
];

export const findProject = (slug) => projects.find((project) => project.slug === slug);
