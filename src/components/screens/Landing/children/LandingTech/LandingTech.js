import Title from "../../ui/Title/Title";
import "./LandingTech.css";
function LandingTech() {
  return (
    <section className="landing-tech">
      <div className="landing-tech__content">
        <Title text="Технологии" />
        <p className="landing-tech__title">7 технологий</p>
        <p className="landing-tech__description">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="landing-tech__list">
          <li className="landing-tech__list-item">HTML</li>
          <li className="landing-tech__list-item">CSS</li>
          <li className="landing-tech__list-item">JS</li>
          <li className="landing-tech__list-item">React</li>
          <li className="landing-tech__list-item">Git</li>
          <li className="landing-tech__list-item">Express.js</li>
          <li className="landing-tech__list-item">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default LandingTech;
