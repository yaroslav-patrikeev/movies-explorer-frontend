import "./ProfileContent.css";

function ProfileContent() {
  return (
    <section className="profile-content">
      <p className="profile-content__greetings">Привет, Виталий!</p>
      <div className="profile-content__name">
        <span className="profile-content__key">Имя</span>
        <span>Виталий</span>
      </div>
      <div className="profile-content__email">
        <span className="profile-content__key">E-mail</span>
        <span>pochta@yandex.ru</span>
      </div>

      <button className="profile-content__edit-button">Редактировать</button>
      <button className="profile-content__logout-button">
        Выйти из аккаунта
      </button>
    </section>
  );
}

export default ProfileContent;
