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
          <input className="login-form__input" type="email" />
          <span className="login-form__error"></span>
        </label>
        <label className="login-form__label login-form__label_last">
          Пароль
          <input
            className="login-form__input login-form__input_error"
            type="password"
          />
          <span className="login-form__error">Что-то пошло не так...</span>
        </label>
        <AuthFooter buttonText={"Войти"} />
      </form>
    </>
  );
}

export default Login;
