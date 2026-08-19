export default function Nav({ t, onToggleLang }) {
  return (
    <nav className="nav">
      <div className="nav-brand">
        <span className="accent">&gt;</span> rlnunes<span className="accent">.dev</span>
      </div>
      <div className="nav-links">
        <a href="#skills">{t.navSkills}</a>
        <a href="#projects">{t.navProjects}</a>
        <a href="#contact">{t.navContact}</a>
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
