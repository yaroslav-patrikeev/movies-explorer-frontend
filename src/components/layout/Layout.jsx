import Footer from './footer/Footer';
import Header from './header/Header';

const Layout = ({ children, footerHide, headerTheme, authorized }) => {
	return (
		<>
			<Header theme={headerTheme} authorized={authorized} />
			{children}
			<Footer hide={footerHide} />
		</>
	);
};

export default Layout;
