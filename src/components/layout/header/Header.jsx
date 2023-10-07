import { useWindowSize } from '@uidotdev/usehooks';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Header.css';
import AccountButton from './accountButton/AccountButton';
import AuthorizationButtons from './authorizationButtons/AuthorizationButtons';
import Burger from './burger/Burger';
import HeaderNavigationLinks from './headerNavigationLinks/HeaderNavigationLinks';
import MobileMenu from './mobileMenu/MobileMenu';

function Header({ theme = 'dark', authorized = false }) {
	const [isMenu, setIsMenu] = useState(false);

	const navigation = useNavigate();
	const size = useWindowSize();
	const isMobile = size.width < 1280;

	const elementsView = () => {
		if (authorized && !isMobile) {
			return (
				<>
					<HeaderNavigationLinks />
					<AccountButton theme={theme} />
				</>
			);
		}
		if (!authorized) return <AuthorizationButtons />;
		if (authorized && isMobile) return <Burger setIsMenu={setIsMenu} />;
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
