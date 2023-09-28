import { Link } from "react-router-dom";
import AccountButton from "../Header/AccountButton/AccountButton";
import "./MobileMenu.css";

function MobileMenu({ isMenu, setIsMenu }) {
  const currentPath = window.location.pathname;

  return (
    <nav className={`mobile-menu ${isMenu ? "mobile-menu_opened" : ""}`}>
      <button
        type="button"
        className="mobile-menu__exit"
        onClick={() => setIsMenu(false)}
      ></button>
      <ul className="mobile-menu__list">
        <li>
          <Link
            to="/"
            className={`mobile-menu__link ${
              currentPath === "/" && "mobile-menu__link_active"
            }`}
          >
            Главная
          </Link>
        </li>
        <li>
          <Link
            to="/movies"
            className={`mobile-menu__link ${
              currentPath === "/movies" && "mobile-menu__link_active"
            }`}
          >
            Фильмы
          </Link>
        </li>
        <li>
          <Link
            to="/saved-movies"
            className={`mobile-menu__link ${
              currentPath === "/saved-movies" && "mobile-menu__link_active"
            }`}
          >
            Сохранённые фильмы
          </Link>
        </li>
      </ul>
      <AccountButton theme="light" />
    </nav>
  );
}

export default MobileMenu;
