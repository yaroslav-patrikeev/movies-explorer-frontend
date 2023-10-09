import Footer from './footer/Footer';
import Header from './header/Header';

const Layout = ({ children, footerHide, headerTheme, isLoggedIn }) => {
	return (
		<>
			<Header theme={headerTheme} isLoggedIn={isLoggedIn} />
			{children}
			<Footer hide={footerHide} />
		</>
	);
};

export default Layout;
