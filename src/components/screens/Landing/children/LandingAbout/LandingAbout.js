import { forwardRef } from "react";
import Title from "../../ui/Title/Title";
import "./LandingAbout.css";

function LandingAbout({}, ref) {
  return (
    <section className="landing-about" ref={ref}>
      <div className="landing-about__content">
        <Title text="О проекте" />
        <div className="landing-about__columns">
          <div className="landing-about__column">
            <h3 className="landing-about__subtitle">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="landing-about__description">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="landing-about__column">
            <h3 className="landing-about__subtitle">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="landing-about__description">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="landing-about__chart">
          <span className="landing-about__chart-one-week">1 неделя</span>
          <span className="landing-about__chart-five-weeks">4 недели</span>
          <span className="landing-about__chart-one-week-description">
            Back-end
          </span>
          <span className="landing-about__chart-five-weeks-description">
            Front-end
          </span>
        </div>
      </div>
    </section>
  );
}

export default forwardRef(LandingAbout);
