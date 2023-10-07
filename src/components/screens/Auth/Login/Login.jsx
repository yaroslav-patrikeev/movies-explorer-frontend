import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Field from '../../../ui/field/Field';
import ModalError from '../../../ui/modalError/ModalError';

import MainApi from '../../../../utils/MainApi';
import AuthFooter from '../children/AuthFooter/AuthFooter';
import AuthHeader from '../children/AuthHeader/AuthHeader';

import './Login.css';

function Login() {
	const [errorText, setErrorText] = useState('');
	const {
		register,
		handleSubmit,
		formState: { errors, isDirty, isValid },
	} = useForm({
		mode: 'onChange',
	});

	const onSubmit = async data => {
		await MainApi.login(data).catch(error => {
			setErrorText(error.response.data.message);
			setTimeout(() => {
				setErrorText('');
			}, 2000);
		});
	};

	return (
		<>
			<ModalError text={errorText} />
			<AuthHeader greeting='Рады видеть!' />
			<main className='main'>
				<div className='login-form'>
					<form
						className='login-form__content'
						onSubmit={handleSubmit(onSubmit)}
					>
						<Field
							register={register}
							name='email'
							error={errors?.email?.message}
							type='email'
							text='E-mail'
							options={{ required: 'Это обязательное поле!' }}
							placeholder='Ваш E-mail'
						/>
						<Field
							register={register}
							name='password'
							error={errors?.password?.message}
							type='password'
							text='Пароль'
							options={{
								required: 'Это обязательное поле!',
								minLength: {
									value: 8,
									message: 'Пароль не может содержать меньше 8 символов!',
								},
								maxLength: {
									value: 30,
									message: 'Пароль не может содержать больше 30 символов!',
								},
							}}
							placeholder='Ваш пароль'
						/>
						<AuthFooter
							buttonText={'Войти'}
							formType='login'
							disabled={!isDirty || !isValid}
						/>
					</form>
				</div>
			</main>
		</>
	);
}

export default Login;
