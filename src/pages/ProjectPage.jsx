import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import TerminalWindow from '../components/TerminalWindow.jsx';
import { findProject } from '../data/content.js';

export function NotFound({ t }) {
  return (
    <section className="section section--contact">
      <div className="section-tag">// 404</div>
      <h1 className="section-title section-title--tight">{t.notFoundTitle}</h1>
      <p className="contact-sub">{t.notFoundSub}</p>
      <Link to="/" className="btn btn--primary">
        {t.notFoundCta}
      </Link>
    </section>
  );
}

export default function ProjectPage({ t }) {
  const { slug } = useParams();
  const project = findProject(slug);
  const detail = project?.detail;

  useEffect(() => {
    if (!project) return;
    const previous = document.title;
    document.title = `${project.name} — rlnunes.dev`;
    return () => {
      document.title = previous;
    };
  }, [project]);

  if (!project || !detail) return <NotFound t={t} />;

  const hasStack = Boolean(detail.stack?.length);

  return (
    <div className="project-page">
      <Link to="/#projects" className="project-back">
        ← {t.projectBack}
      </Link>

      <header className="project-hero">
        {project.logo ? (
          <img
            className="project-hero-logo"
            src={project.logo}
            alt={project.logoAlt ?? project.name}
          />
        ) : (
          <h1 className="project-hero-title">{project.name}</h1>
        )}
        <p className="project-hero-tagline">{detail.tagline}</p>
      </header>

      <div className="section-tag">// {t.projectPreviewTag}</div>
      <TerminalWindow
        wide
        flush
        title={detail.terminalTitle}
        action={
          <a
            className="terminal-open"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            ↗ {t.projectOpen}
          </a>
        }
      >
        <iframe
          className="project-frame"
          src={project.link}
          title={project.name}
          loading="lazy"
        />
      </TerminalWindow>
      <p className="project-preview-note">{t.projectPreviewNote}</p>

      {/* `stack` is optional — a project whose source I don't have just skips it,
          and the column layout collapses instead of leaving a gap. */}
      <div className={`project-info${hasStack ? '' : ' project-info--single'}`}>
        <section className="project-block">
          <h2 className="project-block-title">{t.projectAbout}</h2>
          {detail.about.map((paragraph) => (
            <p key={paragraph} className="project-paragraph">
              {paragraph}
            </p>
          ))}
        </section>

        {hasStack ? (
          <section className="project-block">
            <h2 className="project-block-title">{t.projectStack}</h2>
            {detail.stack.map((group) => (
              <div key={group.group} className="stack-group">
                <div className="stack-group-name">{group.group}</div>
                <div className="chip-row">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>
        ) : null}
      </div>

      {detail.features?.length ? (
        <section className="project-block">
          <h2 className="project-block-title">{t.projectFeatures}</h2>
          <div className="feature-grid">
            {detail.features.map((feature) => (
              <div key={feature.title} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-title">{feature.title}</div>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
