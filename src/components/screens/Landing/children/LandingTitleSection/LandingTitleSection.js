import logoImage from "../../../../../images/logo-image.svg";
import "./LandingTitleSection.css";

function LandingTitleSection() {
  return (
    <section className="landing-title-section">
      <div className="landing-title-section__content">
        <h1 className="landing-title-section__title">
          Учебный проект студента факультета Веб&#8209;разработки.
        </h1>
        <p className="landing-title-section__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <button className="landing-title-section__button element-hover">
          Узнать больше
        </button>
      </div>
      <img
        src={logoImage}
        className="landing-title-section__image"
        alt="sphere-words-web"
      />
    </section>
  );
}

export default LandingTitleSection;
