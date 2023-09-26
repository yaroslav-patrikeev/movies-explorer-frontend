import Film from "../Film/Film";
import "./Films.css";

function Films({ type }) {
  return (
    <section className="films">
      <Film type={type} />
      <Film type={type} />
      <Film type={type} />
      <Film type={type} />
      <Film type={type} />
      <Film type={type} />
      <Film type={type} />
      <Film type={type} />
    </section>
  );
}

export default Films;
