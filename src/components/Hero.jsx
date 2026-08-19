import { useTypewriter } from '../hooks/useTypewriter.js';
import TerminalWindow from './TerminalWindow.jsx';

export default function Hero({ t }) {
  const typedText = useTypewriter(t.whoami);

  return (
    <section className="hero">
      <div className="section-tag">{t.heroTag}</div>
      <h1 className="hero-title">
        {t.heroTitle1}
        <br />
        <span className="accent">{t.heroTitle2}</span>
      </h1>
      <p className="hero-sub">{t.heroSub}</p>

      <TerminalWindow title="bash — richard@rlnunes">
        <div className="terminal-prompt">
          <span className="accent">$</span> whoami
        </div>
        <div className="terminal-output" aria-live="polite">
          {typedText}
          <span className="caret" aria-hidden="true" />
        </div>
      </TerminalWindow>

      <div className="hero-cta">
        <a href="#projects" className="btn btn--primary">
          {t.ctaProjects}
        </a>
        <a href="#contact" className="btn btn--ghost">
          {t.ctaContact}
        </a>
      </div>
    </section>
  );
}
