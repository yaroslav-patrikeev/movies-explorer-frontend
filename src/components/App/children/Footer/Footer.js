import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__text">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <p className="footer__copyright">© {new Date().getFullYear()}</p>
        <ul className="footer__links">
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              className="footer__link element-hover"
              href="https://practicum.yandex.ru/"
            >
              Яндекс Практикум
            </a>
          </li>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              className="footer__link element-hover"
              href="https://github.com/yaroslav-patrikeev"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
