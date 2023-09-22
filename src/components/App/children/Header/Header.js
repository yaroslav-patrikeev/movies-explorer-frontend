import AuthorizationButtons from './AuthorizationButtons/AuthorizationButtons';
import './Header.css';

function Header() {
	return (
		<header className='header'>
			<div className='header__logo'></div>
			{/* <HeaderNavigationLinks />
			<AccountButton /> */}
			<AuthorizationButtons />
		</header>
	);
}

export default Header;
