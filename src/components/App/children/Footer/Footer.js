import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <p className="footer__copyright">© {new Date().getFullYear()}</p>
      <ul className="footer__links">
        <li>
          <a className="footer__link" href="/">
            Яндекс Практикум
          </a>
        </li>
        <li>
          <a className="footer__link" href="/">
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
