import filmImg from "../../../../images/_temp-film.png";
import "./Film.css";

function Film({ type }) {
  const handleLikeClick = (evt) => {
    const element = evt.target;
    if (element.classList.contains("film__button_like_passive")) {
      evt.target.classList.toggle("film__button_like_active");
    }
  };
  return (
    <article className="film">
      <img src={filmImg} alt="" className="film__image" />
      <h2 className="film__title">33 слова о дизайне</h2>
      {type === "saved" ? (
        <div className="film__button film__button_delete"></div>
      ) : (
        <div
          className="film__button film__button_like_passive"
          onClick={handleLikeClick}
        ></div>
      )}
      <p className="film__time">1ч 42м</p>
    </article>
  );
}

export default Film;
