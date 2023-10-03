import { useRef } from 'react';

import Layout from '../../layout/Layout';

import AboutMe from './aboutMe/AboutMe';
import AboutProject from './aboutProject/AboutProject';
import Portfolio from './portfolio/Portfolio';
import Promo from './promo/Promo';
import Techs from './techs/Techs';

function Main() {
	const ref = useRef(null);
	const handleClickToLearnMore = () => {
		ref.current?.scrollIntoView({ behavior: 'smooth' });
	};
	return (
		<Layout>
			<main>
				<Promo handleClickToLearnMore={handleClickToLearnMore} />
				<AboutProject ref={ref} />
				<Techs />
				<AboutMe />
				<Portfolio />
			</main>
		</Layout>
	);
}

export default Main;
