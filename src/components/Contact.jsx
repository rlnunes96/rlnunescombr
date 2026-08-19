import { useReveal } from '../hooks/useReveal.js';
import { contactLinks } from '../data/content.js';

export default function Contact({ t }) {
  const [ref, revealClass] = useReveal();

  return (
    <section id="contact" ref={ref} className={`section section--contact ${revealClass}`}>
      <div className="section-tag">// {t.contactTag}</div>
      <h2 className="section-title section-title--tight">{t.contactTitle}</h2>
      <p className="contact-sub">{t.contactSub}</p>
      <div className="contact-links">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`btn ${link.primary ? 'btn--primary' : 'btn--ghost'}`}
            {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
