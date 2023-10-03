import { Link } from "react-router-dom";
import "./HeaderNavigationLinks.css";

function HeaderNavigationLinks() {
  const currentPath = window.location.pathname;
  return (
    <nav className="header__navigation-links">
      <Link
        to="/movies"
        className={`header__link element-hover ${
          currentPath === "/movies" && "header__link_accent"
        }`}
      >
        Фильмы
      </Link>
      <Link
        to="/saved-movies"
        className={`header__link element-hover ${
          currentPath === "/saved-movies" && "header__link_accent"
        }`}
      >
        Сохраненные фильмы
      </Link>
    </nav>
  );
}

export default HeaderNavigationLinks;
