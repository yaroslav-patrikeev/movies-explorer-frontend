import AuthFooter from "../children/AuthFooter/AuthFooter";
import AuthHeader from "../children/AuthHeader/AuthHeader";
import "./Register.css";

function Register() {
  return (
    <>
      <AuthHeader greeting="Добро пожаловать!" />
      <main className="main">
        <div className="register-form">
          <form className="register-form__content">
            <label className="register-form__label">
              Имя
              <input
                className="register-form__input"
                type="text"
                placeholder="Как вас зовут?"
                minLength={2}
                maxLength={40}
                required
              />
              <span className="register-form__error"></span>
            </label>
            <label className="register-form__label">
              E-mail
              <input
                className="register-form__input"
                type="email"
                required
                placeholder="Ваш E-mail"
              />
              <span className="register-form__error"></span>
            </label>
            <label className="register-form__label register-form__label_last">
              Пароль
              <input
                className="register-form__input"
                type="password"
                placeholder="Придумайте пароль"
                minLength={8}
                maxLength={30}
                required
              />
              <span className="register-form__error"></span>
            </label>
            <AuthFooter buttonText={"Зарегистрироваться"} />
          </form>
        </div>
      </main>
    </>
  );
}

export default Register;
