import spfcStatsLogo from '../assets/spfc-stats.png';

export const skillGroups = [
  { icon: '⚛️', title: 'Frontend', items: ['React', 'JavaScript', 'HTML/CSS'] },
  { icon: '🔥', title: 'Backend & Cloud', items: ['Firebase', 'Cloudflare', 'PHP'] },
  { icon: '📈', title: 'Growth', items: ['Tráfego Pago', 'SEO', 'Analytics'] },
  { icon: '🎨', title: 'Design', items: ['Photoshop', 'Illustrator', 'UI/UX'] },
];

// Cards render `logo` when present and fall back to `icon` otherwise.
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
    logo: spfcStatsLogo,
    logoAlt: 'SPFC Stats',
    link: 'https://spfc.rlnunes.com.br',
    gradient: 'linear-gradient(135deg,#2a0f14,#0a1119)',
    desc: 'Estatísticas do São Paulo FC: elenco, comparação de jogadores, desempenho por competição, títulos e acompanhamento ao vivo.',
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
