import { useState } from "react";
import "./ProfileContent.css";

function ProfileContent() {
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
    <section className="profile-content">
      <p className="profile-content__greetings">Привет, Виталий!</p>
      <div className="profile-content__name">
        <span className="profile-content__key">Имя</span>
        <input
          name="name"
          type="text"
          className="profile-content__input"
          value={values["name"]}
          onInput={handleChange}
          disabled={isDisabled}
          minLength={2}
          maxLength={30}
          required
        />
      </div>
      <div className="profile-content__email">
        <span className="profile-content__key">E-mail</span>
        <input
          type="email"
          name="email"
          className="profile-content__input"
          value={values["email"]}
          onInput={handleChange}
          disabled={isDisabled}
          required
        />
      </div>
      {isDisabled ? (
        <>
          <button
            className="profile-content__edit-button element-hover"
            onClick={() => setIsDisabled(false)}
          >
            Редактировать
          </button>
          <button className="profile-content__logout-button element-hover">
            Выйти из аккаунта
          </button>
        </>
      ) : (
        <>
          <span className="profile-content__save-error"></span>
          <button className="profile-content__save element-hover">
            Сохранить
          </button>
        </>
      )}
    </section>
  );
}

export default ProfileContent;
