import "./Search.css";

function Search() {
  return (
    <section className="search">
      <div className="search__wrapper">
        <input type="text" placeholder="Фильм" className="search__input" />
        <button className="search__button">Найти</button>
      </div>
      <label className="search__short-films">
        <input type="checkbox" className="search__checkbox" />
        <span className="search__slider"></span>
        <span className="search__slider-text">Короткометражки</span>
      </label>
    </section>
  );
}

export default Search;
