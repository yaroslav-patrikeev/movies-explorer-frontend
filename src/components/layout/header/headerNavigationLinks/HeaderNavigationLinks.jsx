import { Link, useLocation } from 'react-router-dom';

import './HeaderNavigationLinks.css';

function HeaderNavigationLinks({ theme }) {
	const { pathname } = useLocation();
	return (
		<nav className='header__navigation-links'>
			<Link
				to='/movies'
				className={`header__link ${
					theme === 'dark' ? 'header__link_dark' : ''
				} element-hover ${pathname === '/movies' && 'header__link_accent'}`}
			>
				Фильмы
			</Link>
			<Link
				to='/saved-movies'
				className={`header__link ${
					theme === 'dark' ? 'header__link_dark' : ''
				} element-hover ${
					pathname === '/saved-movies' && 'header__link_accent'
				}`}
			>
				Сохраненные фильмы
			</Link>
		</nav>
	);
}

export default HeaderNavigationLinks;
