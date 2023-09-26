import "./HeaderNavigationLinks.css";

function HeaderNavigationLinks() {
  const currentPath = window.location.pathname;
  return (
    <nav className="header__navigation-links">
      <a
        href="/movies"
        className={`header__link ${
          currentPath === "/movies" && "header__link_accent"
        }`}
      >
        Фильмы
      </a>
      <a
        href="/saved-movies"
        className={`header__link ${
          currentPath === "/saved-movies" && "header__link_accent"
        }`}
      >
        Сохраненные фильмы
      </a>
    </nav>
  );
}

export default HeaderNavigationLinks;
