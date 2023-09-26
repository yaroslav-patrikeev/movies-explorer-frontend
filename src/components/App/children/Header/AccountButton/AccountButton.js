import { useNavigate } from "react-router-dom";
import "./AccountButton.css";
function AccountButton({ theme = "dark" }) {
  const navigation = useNavigate();
  return (
    <button
      onClick={() => navigation("/profile")}
      className={`header__account-button ${
        theme === "light" && "header__account-button_light"
      }`}
    >
      Аккаунт
      <div className="header__circle-for-button"></div>
    </button>
  );
}

export default AccountButton;
