import { useForm } from 'react-hook-form';

import ModalError from '../../../../ui/modalError/ModalError';

import './SearchForm.css';

function SearchForm({
	lastSearch,
	errorText,
	handleSearch,
	type,
	handleSearchSaved,
	isRequest,
	foundMovies,
	savedMovies,
}) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		clearErrors,
		getValues,
	} = useForm({
		mode: 'onSubmit',
		defaultValues: {
			search: lastSearch?.text,
			short: lastSearch?.short,
		},
	});

	const handleClick = () => {
		if (foundMovies?.length !== 0 && type !== 'saved')
			handleSearch({ ...getValues(), short: !getValues('short') });
		if (type === 'saved' && savedMovies?.length !== 0)
			handleSearchSaved({ ...getValues(), short: !getValues('short') });
	};
	return (
		<div className='search-form'>
			<ModalError text={errors?.search?.message || errorText} />
			<form
				className='search-form__content'
				onSubmit={
					type !== 'saved'
						? handleSubmit(handleSearch)
						: handleSubmit(handleSearchSaved)
				}
			>
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
						disabled={isRequest}
					>
						Найти
					</button>
				</div>
				<label className='search-form__short-films'>
					<input
						type='checkbox'
						className='search-form__checkbox'
						{...register('short')}
						onClick={handleClick}
					/>
					<span className='search-form__slider'></span>
					<span className='search-form__slider-text'>Короткометражки</span>
				</label>
			</form>
		</div>
	);
}

export default SearchForm;
