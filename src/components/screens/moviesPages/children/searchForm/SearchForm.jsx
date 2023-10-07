import { useState } from 'react';
import { useForm } from 'react-hook-form';

import ModalError from '../../../../ui/modalError/ModalError';

import MoviesApi from '../../../../../utils/MoviesApi';

import './SearchForm.css';

function SearchForm({
	setFoundMovies,
	setIsLoading,
	setQuantityCards,
	quantityCards,
	calculateQuantityInitialCards,
	lastSearch,
}) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		clearErrors,
	} = useForm({
		mode: 'onSubmit',
		defaultValues: {
			search: lastSearch?.text,
			short: lastSearch?.short,
		},
	});

	const [serverError, setServerError] = useState('');
	const onSearch = async data => {
		setIsLoading(true);
		setQuantityCards(calculateQuantityInitialCards());
		await MoviesApi.searchAll(data.search)
			.then(res => {
				setFoundMovies(res);
				localStorage.setItem(
					'lastSearch',
					JSON.stringify({
						text: data.search,
						short: data.short,
						result: res,
						quantityCards,
					}),
				);
			})
			.catch(() => {
				setServerError(
					'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
				);
				setTimeout(() => {
					setServerError('');
				}, 2000);
			})
			.finally(() => setIsLoading(false));
	};

	return (
		<div className='search-form'>
			<ModalError text={errors?.search?.message || serverError} />
			<form className='search-form__content' onSubmit={handleSubmit(onSearch)}>
				<div className='search-form__wrapper'>
					<input
						type='text'
						placeholder='Фильм'
						className='search-form__input'
						{...register('search', {
							required: 'Нужно ввести ключевое слово',
						})}
					/>
					<button
						type='submit'
						className='search-form__button element-hover'
						onClick={() => {
							setTimeout(() => {
								clearErrors('search');
							}, 2000);
						}}
					>
						Найти
					</button>
				</div>
				<label className='search-form__short-films'>
					<input
						type='checkbox'
						className='search-form__checkbox'
						{...register('short')}
					/>
					<span className='search-form__slider'></span>
					<span className='search-form__slider-text'>Короткометражки</span>
				</label>
			</form>
		</div>
	);
}

export default SearchForm;
