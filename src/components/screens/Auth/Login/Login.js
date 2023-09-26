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
        </label>
        <label className="login-form__label login-form__label_last">
          Пароль
          <input className="login-form__input" type="password" />
        </label>
        <AuthFooter buttonText={"Войти"} />
      </form>
    </>
  );
}

export default Login;
