import photo from "../../../../../images/student-photo.jpg";
import Title from "../../ui/Title/Title";
import "./LandingStudent.css";

function LandingStudent() {
  return (
    <section className="landing-student">
      <div className="landing-student__content">
        <Title text="Студент" />
        <div className="landing-student__about">
          <div className="landing-student__description">
            <p className="landing-student__name">Ярослав</p>
            <p className="landing-student__short-description">
              Фронтенд-разработчик, 24 года
            </p>
            <p className="landing-student__long-description">
              Я&nbsp;родился в&nbsp;Коломне, живу в&nbsp;Москве.
              Программирование было интересным увлечением, возможностью
              переключаться. Пройдя путь обучения в&nbsp;Яндекс Практикуме
              я&nbsp;многое переосмыслил. Понял, что хочу приносить пользу
              людям, упрощая их жизнь, поэтому собираюсь связать свою жизнь
              с&nbsp;веб-разработкой.
            </p>
            <a
              rel="noreferrer"
              href="https://github.com/yaroslav-patrikeev"
              target="_blank"
              className="landing-student__github-link element-hover"
            >
              Github
            </a>
          </div>
          <img src={photo} className="landing-student__photo" alt="student" />
        </div>
        <div className="landing-student__portfolio">
          <h3 className="landing-student__portfolio-title">Портфолио</h3>
          <ul className="landing-student__portfolio-list">
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                className="landing-student__portfolio-item element-hover"
                href="https://github.com/yaroslav-patrikeev/how-to-learn"
              >
                Статичный сайт
                <div className="landing-student__portfolio-item-image" />
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                className="landing-student__portfolio-item element-hover"
                href="https://github.com/yaroslav-patrikeev/russian-travel"
              >
                Адаптивный сайт
                <div className="landing-student__portfolio-item-image" />
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                className="landing-student__portfolio-item landing-student__portfolio-item_last element-hover"
                href="https://github.com/yaroslav-patrikeev/react-mesto-api-full-gha"
              >
                Одностраничное приложение
                <div className="landing-student__portfolio-item-image" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default LandingStudent;
