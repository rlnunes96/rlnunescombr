import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { i18n, htmlLang } from './data/i18n.js';
import Backdrop from './components/Backdrop.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import ProjectPage, { NotFound } from './pages/ProjectPage.jsx';

/**
 * React Router restores no scroll position of its own: land on the anchored
 * section when the URL carries a hash, and at the top otherwise.
 */
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const target = hash ? document.querySelector(hash) : null;
      if (target) target.scrollIntoView({ behavior: 'smooth' });
      else window.scrollTo(0, 0);
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}

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
      <ScrollManager />
      <div className="page">
        <Backdrop />
        <Nav t={t} onToggleLang={toggleLang} />
        <main>
          <Routes>
            <Route path="/" element={<Home t={t} />} />
            <Route path="/projetos/:slug" element={<ProjectPage t={t} />} />
            <Route path="*" element={<NotFound t={t} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}
