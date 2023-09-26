import { Link } from "react-router-dom";
import AccountButton from "../Header/AccountButton/AccountButton";
import "./MobileMenu.css";

function MobileMenu({ setIsMenu }) {
  const currentPath = window.location.pathname;
  return (
    <nav className="mobile-menu">
      <button
        className="mobile-menu__exit"
        onClick={() => setIsMenu(false)}
      ></button>
      <ul className="mobile-menu__list">
        <li>
          <Link
            className={`mobile-menu__link ${
              currentPath === "/" && "mobile-menu__link_active"
            }`}
          >
            Главная
          </Link>
        </li>
        <li>
          <Link
            className={`mobile-menu__link ${
              currentPath === "/movies" && "mobile-menu__link_active"
            }`}
          >
            Фильмы
          </Link>
        </li>
        <li>
          <Link
            className={`mobile-menu__link ${
              currentPath === "/saved-movies" && "mobile-menu__link_active"
            }`}
          >
            Сохраненные фильмы
          </Link>
        </li>
      </ul>
      <AccountButton theme="light" />
    </nav>
  );
}

export default MobileMenu;
