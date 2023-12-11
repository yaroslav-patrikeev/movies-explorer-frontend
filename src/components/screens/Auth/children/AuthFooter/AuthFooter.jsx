import { Link } from 'react-router-dom';

import './AuthFooter.css';

function AuthFooter({ buttonText, formType, disabled }) {
	return (
		<div
			className={`auth-footer ${
				formType === 'login' ? 'auth-footer_login' : 'auth-footer_register'
			}`}
		>
			<button
				type='submit'
				className={`auth-footer__button ${
					disabled ? 'auth-footer__button_disabled' : 'element-hover'
				} `}
				disabled={disabled}
			>
				{buttonText}
			</button>
			<p className='auth-footer__text'>
				{buttonText === 'Войти'
					? 'Ещё не зарегистрированы?'
					: 'Уже зарегистрированы?'}
				<Link
					to={buttonText === 'Войти' ? '/signup' : '/signin'}
					className='auth-footer__link element-hover'
				>
					{buttonText === 'Войти' ? 'Регистрация' : 'Войти'}
				</Link>
			</p>
		</div>
	);
}

export default AuthFooter;
