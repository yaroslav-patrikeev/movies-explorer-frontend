import { useEffect } from 'react';

import { calculateQuantityInitialCards } from '../../../../utils/calculateQuantityInitialCards';
import Layout from '../../../layout/Layout';
import MoreFilmsButton from '../children/moreFilmsButton/MoreFilmsButton';
import MoviesCardList from '../children/moviesCardList/MoviesCardList';
import Preloader from '../children/preloader/Preloader';
import SearchForm from '../children/searchForm/SearchForm';

function Movies({
	setQuantityCards,
	quantityCards,
	foundMovies,
	lastSearch,
	errorText,
	handleSearch,
	isLoading,
	size,
	savedMovies,
	handleSaveMovie,
	handleDeleteMovie,
}) {
	useEffect(() => {
		setQuantityCards({
			...quantityCards,
			add: calculateQuantityInitialCards(size).add,
		});
	}, [size]);

	return (
		<Layout headerTheme='light' isLoggedIn={true}>
			<main>
				<SearchForm
					lastSearch={lastSearch}
					errorText={errorText}
					handleSearch={handleSearch}
				/>
				{isLoading && <Preloader />}
				{Object.keys(foundMovies).length === 0 && (
					<p className='not-result'>Ничего не найдено</p>
				)}
				<MoviesCardList
					foundMovies={foundMovies}
					quantityCards={quantityCards}
					savedMovies={savedMovies}
					handleSaveMovie={handleSaveMovie}
					handleDeleteMovie={handleDeleteMovie}
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
