import { useWindowSize } from '@uidotdev/usehooks';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Header.css';
import AccountButton from './accountButton/AccountButton';
import AuthorizationButtons from './authorizationButtons/AuthorizationButtons';
import Burger from './burger/Burger';
import HeaderNavigationLinks from './headerNavigationLinks/HeaderNavigationLinks';
import MobileMenu from './mobileMenu/MobileMenu';

function Header({ theme = 'dark', isLoggedIn = false }) {
	const [isMenu, setIsMenu] = useState(false);
	const navigation = useNavigate();
	const size = useWindowSize();
	const isMobile = size.width < 1280;

	const elementsView = () => {
		if (isLoggedIn && !isMobile) {
			return (
				<>
					<HeaderNavigationLinks theme={theme} />
					<AccountButton theme={theme} />
				</>
			);
		}
		if (!isLoggedIn) return <AuthorizationButtons />;
		if (isLoggedIn && isMobile) return <Burger setIsMenu={setIsMenu} />;
	};
	return (
		<header className={`header header_${theme} `}>
			<div
				className={`header__content ${isMenu ? 'header__content_overlay' : ''}`}
			>
				<MobileMenu setIsMenu={setIsMenu} isMenu={isMenu} />
				<div
					className='header__logo element-hover'
					onClick={() => navigation('/')}
				></div>
				{elementsView()}
			</div>
		</header>
	);
}

export default Header;
