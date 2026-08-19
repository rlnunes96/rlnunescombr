import { Link, useLocation } from 'react-router-dom';

export default function Nav({ t, onToggleLang }) {
  const { pathname } = useLocation();
  // Away from the home page the section anchors have to travel back to it first.
  const home = pathname === '/' ? '' : '/';

  return (
    <nav className="nav">
      <Link to="/" className="nav-brand">
        <span className="accent">&gt;</span> rlnunes<span className="accent">.dev</span>
      </Link>
      <div className="nav-links">
        <Link to={`${home}#skills`}>{t.navSkills}</Link>
        <Link to={`${home}#projects`}>{t.navProjects}</Link>
        <Link to={`${home}#contact`}>{t.navContact}</Link>
        <button
          type="button"
          className="lang-toggle"
          onClick={onToggleLang}
          aria-label={t.langLabel === 'EN' ? 'Switch to English' : 'Mudar para português'}
        >
          {t.langLabel}
        </button>
      </div>
    </nav>
  );
}
