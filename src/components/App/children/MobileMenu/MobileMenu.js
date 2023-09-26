import { Link } from "react-router-dom";
import AccountButton from "../Header/AccountButton/AccountButton";
import "./MobileMenu.css";

function MobileMenu({ setIsMenu }) {
  return (
    <nav className="mobile-menu">
      <button
        className="mobile-menu__exit"
        onClick={() => setIsMenu(false)}
      ></button>
      <ul className="mobile-menu__list">
        <li>
          <Link className="mobile-menu__link">Главная</Link>
        </li>
        <li>
          <Link className="mobile-menu__link">Фильмы</Link>
        </li>
        <li>
          <Link className="mobile-menu__link">Сохраненные фильмы</Link>
        </li>
      </ul>
      <AccountButton theme="light" />
    </nav>
  );
}

export default MobileMenu;
