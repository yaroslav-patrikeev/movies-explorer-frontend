import { useForm } from 'react-hook-form';

import ModalError from '../../../../ui/modalError/ModalError';

import './SearchForm.css';

function SearchForm({
	lastSearch,
	errorText,
	handleSearch,
	type,
	handleSearchSaved,
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
					>
						Найти
					</button>
				</div>
				<label className='search-form__short-films'>
					<input
						type='checkbox'
						className='search-form__checkbox'
						{...register('short')}
						onClick={() =>
							type !== 'saved'
								? handleSearch({ ...getValues(), short: !getValues('short') })
								: handleSearchSaved({
										...getValues(),
										short: !getValues('short'),
								  })
						}
					/>
					<span className='search-form__slider'></span>
					<span className='search-form__slider-text'>Короткометражки</span>
				</label>
			</form>
		</div>
	);
}

export default SearchForm;
