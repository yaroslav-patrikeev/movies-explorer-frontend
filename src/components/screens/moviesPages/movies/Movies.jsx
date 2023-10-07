import { useWindowSize } from '@uidotdev/usehooks';
import { useEffect, useState } from 'react';

import Layout from '../../../layout/Layout';
import MoreFilmsButton from '../children/moreFilmsButton/MoreFilmsButton';
import MoviesCardList from '../children/moviesCardList/MoviesCardList';
import Preloader from '../children/preloader/Preloader';
import SearchForm from '../children/searchForm/SearchForm';

function Movies() {
	const lastSearch = JSON.parse(localStorage.getItem('lastSearch'));
	const [foundMovies, setFoundMovies] = useState(lastSearch?.result);
	const [isLoading, setIsLoading] = useState(false);
	const [quantityCards, setQuantityCards] = useState(lastSearch?.quantityCards);
	const size = useWindowSize();
	const calculateQuantityInitialCards = () => {
		if (size.width < 768) return { cards: 5, add: 2 };
		if (size.width < 1280) return { cards: 4, add: 2 };
		return { cards: 16, add: 4 };
	};

	useEffect(() => {
		setQuantityCards({
			...quantityCards,
			add: calculateQuantityInitialCards().add,
		});
	}, [size]);

	return (
		<Layout headerTheme='light' authorized={true}>
			<main>
				<SearchForm
					setFoundMovies={setFoundMovies}
					setIsLoading={setIsLoading}
					setQuantityCards={setQuantityCards}
					quantityCards={quantityCards}
					calculateQuantityInitialCards={calculateQuantityInitialCards}
					lastSearch={lastSearch}
				/>
				{isLoading && <Preloader />}
				<MoviesCardList
					foundMovies={foundMovies}
					quantityCards={quantityCards}
				/>
				{quantityCards?.cards < foundMovies?.length && (
					<MoreFilmsButton
						quantityCards={quantityCards}
						setQuantityCards={setQuantityCards}
					/>
				)}
			</main>
		</Layout>
	);
}

export default Movies;
