import Hero from '../components/Hero.jsx';
import Skills from '../components/Skills.jsx';
import Projects from '../components/Projects.jsx';
import Contact from '../components/Contact.jsx';

export default function Home({ t }) {
  return (
    <>
      <Hero t={t} />
      <Skills t={t} />
      <Projects t={t} />
      <Contact t={t} />
    </>
  );
}
