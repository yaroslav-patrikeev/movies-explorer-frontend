import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";
import AccountButton from "./AccountButton/AccountButton";
import AuthorizationButtons from "./AuthorizationButtons/AuthorizationButtons";
import Burger from "./Burger/Burger";
import "./Header.css";
import HeaderNavigationLinks from "./HeaderNavigationLinks/HeaderNavigationLinks";

function Header({ theme = "dark", authorized = false }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  const navigation = useNavigate();

  useEffect(() => {
    window.innerWidth < 1280 && setIsMobile(true);
    const resize = () => {
      if (window.innerWidth < 1280) return setIsMobile(true);
      setIsMobile(false);
      setIsMenu(false);
    };
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const elementsView = () => {
    if (authorized && !isMobile) {
      return (
        <>
          <HeaderNavigationLinks />
          <AccountButton theme={theme} />
        </>
      );
    }
    if (!authorized) return <AuthorizationButtons />;
    if (authorized && isMobile) return <Burger setIsMenu={setIsMenu} />;
  };
  return (
    <header className={`header header_${theme} `}>
      <div
        className={`header__content ${isMenu ? "header__content_overlay" : ""}`}
      >
        <MobileMenu setIsMenu={setIsMenu} isMenu={isMenu} />
        <div
          className="header__logo element-hover"
          onClick={() => navigation("/")}
        ></div>
        {elementsView()}
      </div>
    </header>
  );
}

export default Header;
