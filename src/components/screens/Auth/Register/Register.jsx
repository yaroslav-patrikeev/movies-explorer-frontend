import { useForm } from 'react-hook-form';

import Field from '../../../ui/field/Field';
import ModalError from '../../../ui/modalError/ModalError';

import {
	emailRegExp,
	nameRegExp,
} from '../../../../constants/regexp.constants';
import AuthFooter from '../children/AuthFooter/AuthFooter';
import AuthHeader from '../children/AuthHeader/AuthHeader';

import './Register.css';

function Register({ errorText, handleRegister }) {
	const {
		register,
		handleSubmit,
		formState: { errors, isDirty, isValid },
	} = useForm({
		mode: 'onChange',
	});
	return (
		<>
			<ModalError text={errorText} />
			<AuthHeader greeting='Добро пожаловать!' />
			<main className='main'>
				<div className='register-form'>
					<form
						className='register-form__content'
						onSubmit={handleSubmit(handleRegister)}
					>
						<Field
							register={register}
							name='userName'
							error={errors?.userName?.message}
							options={{
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
							}}
							placeholder='Как вас зовут?'
							text='Имя'
							type='text'
						/>
						<Field
							register={register}
							name='email'
							error={errors?.email?.message}
							options={{
								required: 'Это обязательное поле!',
								pattern: {
									value: emailRegExp,
									message: 'Некорректный email!',
								},
							}}
							placeholder='Ваш E-mail'
							text='E-mail'
							type='email'
						/>
						<Field
							register={register}
							name='password'
							error={errors?.password?.message}
							options={{
								required: 'Это обязательное поле!',
								minLength: {
									value: 8,
									message: 'Минимальная длина имени - 8 символов!',
								},
								maxLength: {
									value: 30,
									message: 'Максимальная длина имени - 30 символов!',
								},
							}}
							placeholder='Придумайте пароль'
							text='Пароль'
							type='password'
						/>
						<AuthFooter
							buttonText={'Зарегистрироваться'}
							disabled={!isDirty || !isValid}
							formType='register'
						/>
					</form>
				</div>
			</main>
		</>
	);
}

export default Register;
