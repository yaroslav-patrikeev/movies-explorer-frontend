import './AuthorizationButtons.css';

function AuthorizationButtons() {
	return (
		<div className='header__authorization-buttons'>
			<button className='header__registration-button'>Регистрация</button>
			<button className='header__log-in-button'>Войти</button>
		</div>
	);
}

export default AuthorizationButtons;
