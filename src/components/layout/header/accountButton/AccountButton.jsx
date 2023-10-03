import { useNavigate } from "react-router-dom";
import "./AccountButton.css";
function AccountButton({ theme = "dark" }) {
  const navigation = useNavigate();
  return (
    <button
      type="button"
      onClick={() => navigation("/profile")}
      className={`header__account-button element-hover ${
        theme === "light" && "header__account-button_light"
      }`}
    >
      Аккаунт
      <span className="header__circle-for-button"></span>
    </button>
  );
}

export default AccountButton;
