import logoImage from "../../../../../images/logo-image.svg";
import "./LandingTitle.css";

function LandingTitle({ handleClickToLearnMore }) {
  return (
    <section className="landing-title">
      <div className="landing-title__content">
        <div className="landing-title__text">
          <h1 className="landing-title__title">
            Учебный проект студента факультета Веб&#8209;разработки.
          </h1>
          <p className="landing-title__subtitle">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <button
            type="button"
            onClick={handleClickToLearnMore}
            className="landing-title__button element-hover"
          >
            Узнать больше
          </button>
        </div>
        <img
          src={logoImage}
          className="landing-title__image"
          alt="sphere-words-web"
        />
      </div>
    </section>
  );
}

export default LandingTitle;
