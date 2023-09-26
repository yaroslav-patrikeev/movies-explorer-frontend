import "./HeaderNavigationLinks.css";

function HeaderNavigationLinks() {
  return (
    <nav className="header__navigation-links">
      <a href="/movies" className="header__link header__link_accent">
        Фильмы
      </a>
      <a href="/saved-movies" className="header__link">
        Сохраненные фильмы
      </a>
    </nav>
  );
}

export default HeaderNavigationLinks;
