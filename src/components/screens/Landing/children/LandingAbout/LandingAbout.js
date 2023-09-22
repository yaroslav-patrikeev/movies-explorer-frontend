import Title from "../../ui/Title/Title";
import "./LandingAbout.css";

function LandingAbout() {
  return (
    <section className="landing-about">
      <Title text="О проекте" />
      <div className="landing-about__columns">
        <div className="landing-about__column">
          <p className="landing-about__subtitle">
            Дипломный проект включал 5 этапов
          </p>
          <p className="landing-about__description">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="landing-about__column">
          <p className="landing-about__subtitle">
            На выполнение диплома ушло 5 недель
          </p>
          <p className="landing-about__description">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="landing-about__chart">
        <div className="landing-about__chart-one-week">1 неделя</div>
        <div className="landing-about__chart-five-weeks">4 недели</div>
        <p className="landing-about__chart-one-week-description">Back-end</p>
        <p className="landing-about__chart-five-weeks-description">Front-end</p>
      </div>
    </section>
  );
}

export default LandingAbout;
