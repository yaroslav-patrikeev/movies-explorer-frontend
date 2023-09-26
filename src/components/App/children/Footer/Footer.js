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
          <a
            rel="noreferrer"
            target="_blanc"
            className="footer__link element-hover"
            href="https://practicum.yandex.ru/"
          >
            Яндекс Практикум
          </a>
        </li>
        <li>
          <a
            rel="noreferrer"
            target="_blanc"
            className="footer__link element-hover"
            href="https://github.com/yaroslav-patrikeev"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
