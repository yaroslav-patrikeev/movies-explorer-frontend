import "./Search.css";

function Search() {
  return (
    <div className="search">
      <form className="search__content">
        <div className="search__wrapper">
          <input type="text" placeholder="Фильм" className="search__input" />
          <button type="submit" className="search__button element-hover">
            Найти
          </button>
        </div>
        <label className="search__short-films">
          <input type="checkbox" className="search__checkbox" />
          <span className="search__slider"></span>
          <span className="search__slider-text">Короткометражки</span>
        </label>
      </form>
    </div>
  );
}

export default Search;
