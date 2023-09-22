import arrow from "../../../../../images/link-arrow.svg";
import photo from "../../../../../images/student-photo.jpg";
import Title from "../../ui/Title/Title";
import "./LandingStudent.css";

function LandingStudent() {
  return (
    <section className="landing-student">
      <Title text="Студент" />
      <div className="landing-student__about">
        <div className="landing-student__description">
          <p className="landing-student__name">Ярослав</p>
          <p className="landing-student__short-description">
            Фронтенд-разработчик, 24 года
          </p>
          <p className="landing-student__long-description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a href="/" className="landing-student__github-link">
            GitHub
          </a>
        </div>
        <img src={photo} className="landing-student__photo" alt="student" />
      </div>
      <div className="landing-student__portfolio">
        <h3 className="landing-student__portfolio-title">Портфолио</h3>
        <ul className="landing-student__portfolio-list">
          <li>
            <a className="landing-student__portfolio-item" href="/">
              Статичный сайт
              <img
                src={arrow}
                alt="arrow"
                className="landing-student__portfolio-item-image"
              />
            </a>
          </li>
          <li>
            <a className="landing-student__portfolio-item" href="/">
              Адаптивный сайт
              <img
                src={arrow}
                alt="arrow"
                className="landing-student__portfolio-item-image"
              />
            </a>
          </li>
          <li>
            <a className="landing-student__portfolio-item" href="/">
              Одностраничное приложение
              <img
                src={arrow}
                alt="arrow"
                className="landing-student__portfolio-item-image"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default LandingStudent;
