import { useCallback } from 'react';
import { useReveal } from '../hooks/useReveal.js';
import { projects } from '../data/content.js';
import { hasFinePointer, prefersReducedMotion } from '../lib/media.js';

const TILT_DEGREES = 10;
const RESTING_TRANSFORM = 'perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0)';

export default function Projects({ t }) {
  const [ref, revealClass] = useReveal();

  // Tilt is written straight to the node: it tracks the pointer continuously,
  // and routing that through state would re-render the grid on every frame.
  const handleMove = useCallback((event) => {
    if (!hasFinePointer() || prefersReducedMotion()) return;
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${px * TILT_DEGREES}deg) rotateX(${
      -py * TILT_DEGREES
    }deg) translateY(-4px)`;
    card.classList.add('is-tilted');
  }, []);

  const handleLeave = useCallback((event) => {
    const card = event.currentTarget;
    card.style.transform = RESTING_TRANSFORM;
    card.classList.remove('is-tilted');
  }, []);

  return (
    <section id="projects" ref={ref} className={`section section--projects ${revealClass}`}>
      <div className="section-tag">// {t.projectsTag}</div>
      <h2 className="section-title">{t.projectsTitle}</h2>
      <div className="project-grid">
        {projects.map((project) => {
          const isExternal = project.link !== '#';
          return (
            <a
              key={project.name}
              href={project.link}
              className="project-card"
              onMouseMove={handleMove}
              onMouseLeave={handleLeave}
              {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <div className="project-cover" style={{ background: project.gradient }}>
                <span className="project-cover-icon">{project.icon}</span>
                <div className="project-cover-grid" aria-hidden="true" />
              </div>
              <div className="project-body">
                <div className="project-head">
                  <span className="project-name">{project.name}</span>
                  <span className="project-link">↗ {t.liveLink}</span>
                </div>
                <p className="project-desc">{project.desc}</p>
                <div className="chip-row">
                  {project.stack.map((tech) => (
                    <span key={tech} className="chip chip--accent">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
