import './SearchForm.css';

function SearchForm() {
	return (
		<div className='search-form'>
			<form className='search-form__content'>
				<div className='search-form__wrapper'>
					<input
						type='text'
						placeholder='Фильм'
						className='search-form__input'
					/>
					<button type='submit' className='search-form__button element-hover'>
						Найти
					</button>
				</div>
				<label className='search-form__short-films'>
					<input type='checkbox' className='search-form__checkbox' />
					<span className='search-form__slider'></span>
					<span className='search-form__slider-text'>Короткометражки</span>
				</label>
			</form>
		</div>
	);
}

export default SearchForm;
