import AuthFooter from "../children/AuthFooter/AuthFooter";
import AuthHeader from "../children/AuthHeader/AuthHeader";
import "./Login.css";

function Login() {
  return (
    <>
      <AuthHeader greeting="Рады видеть!" />
      <form className="login-form">
        <label className="login-form__label">
          E-mail
          <input
            className="login-form__input"
            type="email"
            placeholder="Ваш E-mail"
            required
          />
          <span className="login-form__error"></span>
        </label>
        <label className="login-form__label login-form__label_last">
          Пароль
          <input
            className="login-form__input"
            type="password"
            placeholder="Ваш пароль"
            minLength={8}
            required
          />
          <span className="login-form__error"></span>
        </label>
        <AuthFooter buttonText={"Войти"} />
      </form>
    </>
  );
}

export default Login;
