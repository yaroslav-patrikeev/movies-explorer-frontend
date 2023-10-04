import { useForm } from 'react-hook-form';

import AuthFooter from '../children/AuthFooter/AuthFooter';
import AuthHeader from '../children/AuthHeader/AuthHeader';

import './Login.css';

function Login() {
	const { register } = useForm();
	return (
		<>
			<AuthHeader greeting='Рады видеть!' />
			<main className='main'>
				<div className='login-form'>
					<form className='login-form__content'>
						<label className='login-form__label'>
							E-mail
							<input
								className='login-form__input'
								type='email'
								placeholder='Ваш E-mail'
								required
							/>
							<span className='login-form__error'></span>
						</label>
						<label className='login-form__label login-form__label_last'>
							Пароль
							<input
								className='login-form__input'
								type='password'
								placeholder='Ваш пароль'
								minLength={8}
								maxLength={30}
								required
							/>
							<span className='login-form__error'></span>
						</label>
						<AuthFooter buttonText={'Войти'} />
					</form>
				</div>
			</main>
		</>
	);
}

export default Login;
