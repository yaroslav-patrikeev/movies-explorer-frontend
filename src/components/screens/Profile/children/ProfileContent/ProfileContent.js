import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileContent.css";

function ProfileContent() {
  const navigation = useNavigate();
  const [values, setValues] = useState({
    name: "Виталий",
    email: "pochta@yandex.ru",
  });

  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <div className="profile">
      <form className="profile__content">
        <p className="profile__greetings">Привет, Виталий!</p>
        <div className="profile__name">
          <span className="profile__key">Имя</span>
          <input
            name="name"
            type="text"
            className="profile__input"
            value={values["name"]}
            onInput={handleChange}
            disabled={isDisabled}
            minLength={2}
            maxLength={40}
            required
          />
        </div>
        <div className="profile__email">
          <span className="profile__key">E-mail</span>
          <input
            type="email"
            name="email"
            className="profile__input"
            value={values["email"]}
            onInput={handleChange}
            disabled={isDisabled}
            required
          />
        </div>
        {isDisabled ? (
          <>
            <button
              type="button"
              className="profile__edit-button element-hover"
              onClick={() => setIsDisabled(false)}
            >
              Редактировать
            </button>
            <button
              type="button"
              onClick={() => navigation("/")}
              className="profile__logout-button element-hover"
            >
              Выйти из аккаунта
            </button>
          </>
        ) : (
          <>
            <span className="profile__save-error"></span>
            <button type="submit" className="profile__save element-hover">
              Сохранить
            </button>
          </>
        )}
      </form>
    </div>
  );
}

export default ProfileContent;
