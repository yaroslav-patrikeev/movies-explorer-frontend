import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import ModalError from '../../ui/modalError/ModalError';
import ModalSuccess from '../../ui/modalSuccess/ModalSuccess';

import { emailRegExp, nameRegExp } from '../../../constants/regexp.constants';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import Layout from '../../layout/Layout';

import './Profile.css';

function Profile({
	handleUpdate,
	errorText,
	handleLogout,
	successText,
	isDisabled,
	setIsDisabled,
}) {
	const currentUser = useContext(CurrentUserContext);
	const [isSaveActive, setIsSaveActive] = useState(false);
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors, isDirty, isValid },
	} = useForm({
		mode: 'onChange',
	});

	useEffect(() => {
		setValue('userName', currentUser.userName);
		setValue('email', currentUser.email);
	}, [currentUser]);

	useEffect(() => {
		setIsSaveActive(
			isDirty &&
				isValid &&
				(currentUser.userName !== watch('userName') ||
					currentUser.email !== watch('email')),
		);
	}, [isDirty, isValid, watch()]);

	return (
		<Layout headerTheme='light' isLoggedIn={true} footerHide={true}>
			<ModalError text={errorText} />
			<ModalSuccess text={successText} />
			<main className='main'>
				<section className='profile'>
					<form
						className='profile__content'
						onSubmit={handleSubmit(handleUpdate)}
					>
						<p className='profile__greetings'>
							Привет, {currentUser?.userName}!
						</p>
						<div className='profile__name'>
							<span className='profile__key'>Имя</span>
							<input
								type='text'
								className='profile__input'
								disabled={isDisabled}
								minLength={2}
								maxLength={40}
								required
								{...register('userName', {
									required: 'Это обязательное поле!',
									minLength: {
										value: 2,
										message: 'Минимальная длина имени - 2 символа!',
									},
									maxLength: {
										value: 40,
										message: 'Максимальная длина имени - 40 символов!',
									},
									pattern: {
										value: nameRegExp,
										message: 'Некорректное имя!',
									},
								})}
							/>
						</div>
						<div className='profile__email'>
							<span className='profile__key'>E-mail</span>
							<input
								type='email'
								className='profile__input'
								disabled={isDisabled}
								required
								{...register('email', {
									required: 'Это обязательное поле!',
									pattern: {
										value: emailRegExp,
										message: 'Некорректный email!',
									},
								})}
							/>
						</div>
						{Object.keys(errors).length > 0 && (
							<span className='profile__save-error'>Некорректные данные</span>
						)}
						{isDisabled ? (
							<>
								<button
									type='button'
									className='profile__edit-button element-hover'
									onClick={() => setIsDisabled(false)}
								>
									Редактировать
								</button>
								<button
									type='button'
									onClick={handleLogout}
									className='profile__logout-button element-hover'
								>
									Выйти из аккаунта
								</button>
							</>
						) : (
							<>
								<span className='profile__save-error'></span>
								<button
									type='submit'
									className={`profile__save ${
										isSaveActive ? 'element-hover' : 'profile__save_disabled'
									}`}
									disabled={!isSaveActive}
								>
									Сохранить
								</button>
							</>
						)}
					</form>
				</section>
			</main>
		</Layout>
	);
}

export default Profile;
