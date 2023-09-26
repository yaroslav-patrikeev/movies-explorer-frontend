import { Link } from "react-router-dom";
import "./AuthFooter.css";

function AuthFooter({ buttonText }) {
  return (
    <section className="auth-footer">
      <button className="auth-footer__button">{buttonText}</button>
      <p className="auth-footer__text">
        {buttonText === "Войти"
          ? "Ещё не зарегистрированы?"
          : "Уже зарегистрированы?"}
        <Link
          to={buttonText === "Войти" ? "/signup" : "/signin"}
          className="auth-footer__link"
        >
          {buttonText === "Войти" ? "Регистрация" : "Войти"}
        </Link>
      </p>
    </section>
  );
}

export default AuthFooter;
