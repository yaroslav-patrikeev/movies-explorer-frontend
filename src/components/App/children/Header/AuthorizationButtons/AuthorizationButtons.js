import { useNavigate } from "react-router-dom";
import "./AuthorizationButtons.css";

function AuthorizationButtons() {
  const navigate = useNavigate();
  return (
    <div className="header__authorization-buttons">
      <button
        type="button"
        className="header__registration-button element-hover"
        onClick={() => navigate("/signup")}
      >
        Регистрация
      </button>
      <button
        type="button"
        className="header__log-in-button element-hover"
        onClick={() => navigate("/signin")}
      >
        Войти
      </button>
    </div>
  );
}

export default AuthorizationButtons;
