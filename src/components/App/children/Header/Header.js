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
    window.innerWidth < 1300 && setIsMobile(true);
    const resize = () => {
      if (window.innerWidth < 1300) return setIsMobile(true);
      setIsMobile(false);
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
    <header className={`header header_${theme}`}>
      {isMenu && <MobileMenu setIsMenu={setIsMenu} />}
      <div className="header__logo" onClick={() => navigation("/")}></div>
      {elementsView()}
    </header>
  );
}

export default Header;
