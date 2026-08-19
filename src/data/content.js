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
 *   stack          grupos de tecnologias { group, items[] }
 *   features       lista de funcionalidades { icon, title, desc }
 */
export const projects = [
  {
    name: 'Loja Virtual',
    icon: '🛒',
    link: '#',
    gradient: 'linear-gradient(135deg,#0f2a24,#0a1119)',
    desc: 'E-commerce completo com checkout otimizado e integração de pagamentos.',
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
    name: 'Painel Administrativo',
    icon: '📊',
    link: '#',
    gradient: 'linear-gradient(135deg,#241030,#0a1119)',
    desc: 'Dashboard interno para gestão de dados em tempo real.',
  },
];

export const contactLinks = [
  { label: 'contato@rlnunes.com.br', href: 'mailto:contato@rlnunes.com.br', primary: true },
  { label: 'WhatsApp', href: 'https://wa.me/55', external: true },
  { label: 'GitHub', href: 'https://github.com', external: true },
];

export const findProject = (slug) => projects.find((project) => project.slug === slug);
