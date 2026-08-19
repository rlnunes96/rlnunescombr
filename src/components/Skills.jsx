import { useReveal } from '../hooks/useReveal.js';
import { skillGroups } from '../data/content.js';

export default function Skills({ t }) {
  const [ref, revealClass] = useReveal();

  return (
    <section id="skills" ref={ref} className={`section section--skills ${revealClass}`}>
      <div className="section-tag">// {t.skillsTag}</div>
      <h2 className="section-title">{t.skillsTitle}</h2>
      <div className="skill-grid">
        {skillGroups.map((group) => (
          <div key={group.title} className="skill-card">
            <div className="skill-icon">{group.icon}</div>
            <div className="skill-name">{group.title}</div>
            <div className="chip-row">
              {group.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
