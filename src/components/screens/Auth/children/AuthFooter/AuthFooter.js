import { Link } from "react-router-dom";
import "./AuthFooter.css";

function AuthFooter({ buttonText }) {
  return (
    <div className="auth-footer">
      <button type="button" className="auth-footer__button element-hover">
        {buttonText}
      </button>
      <p className="auth-footer__text">
        {buttonText === "Войти"
          ? "Ещё не зарегистрированы?"
          : "Уже зарегистрированы?"}
        <Link
          to={buttonText === "Войти" ? "/signup" : "/signin"}
          className="auth-footer__link element-hover"
        >
          {buttonText === "Войти" ? "Регистрация" : "Войти"}
        </Link>
      </p>
    </div>
  );
}

export default AuthFooter;
