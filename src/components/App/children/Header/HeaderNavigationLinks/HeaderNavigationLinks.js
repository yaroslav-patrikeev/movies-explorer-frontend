import './HeaderNavigationLinks.css';

function HeaderNavigationLinks() {
	return (
		<nav className='header__navigation-links'>
			<a href='/' className='header__navigation-link'>
				Фильмы
			</a>
			<a href='/' className='header__navigation-link'>
				Сохраненные фильмы
			</a>
		</nav>
	);
}

export default HeaderNavigationLinks;
