import { useEffect, useState } from 'react';
import { i18n, htmlLang } from './data/i18n.js';
import Backdrop from './components/Backdrop.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [lang, setLang] = useState('pt');
  const t = i18n[lang];

  useEffect(() => {
    document.documentElement.lang = htmlLang[lang];
  }, [lang]);

  const toggleLang = () => setLang((current) => (current === 'pt' ? 'en' : 'pt'));

  return (
    <>
      <CustomCursor />
      <div className="page">
        <Backdrop />
        <Nav t={t} onToggleLang={toggleLang} />
        <main>
          <Hero t={t} />
          <Skills t={t} />
          <Projects t={t} />
          <Contact t={t} />
        </main>
        <Footer t={t} />
      </div>
    </>
  );
}
