import Film from "../Film/Film";
import "./Films.css";

function Films({ type }) {
  return (
    <div className="films">
      <div className="films__content">
        <Film type={type} />
        <Film type={type} />
        <Film type={type} />
        <Film type={type} />
        <Film type={type} />
      </div>
    </div>
  );
}

export default Films;
