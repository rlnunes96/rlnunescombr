export default function Footer({ t }) {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} rlnunes.com.br — {t.footerNote}</span>
    </footer>
  );
}
