import Layout from '../../../layout/Layout';
import MoviesCardList from '../children/moviesCardList/MoviesCardList';
import Preloader from '../children/preloader/Preloader';
import SearchForm from '../children/searchForm/SearchForm';

function SavedMovies({
	savedMovies,
	isLoading,
	handleDeleteMovie,
	handleSearchSaved,
}) {
	return (
		<Layout headerTheme='light' isLoggedIn={true}>
			<main className='main'>
				<SearchForm type='saved' handleSearchSaved={handleSearchSaved} />
				{isLoading && <Preloader />}
				{Object.keys(savedMovies).length === 0 && (
					<p className='not-result'>Ничего не найдено</p>
				)}
				<MoviesCardList
					type='saved'
					foundMovies={savedMovies}
					handleDeleteMovie={handleDeleteMovie}
				/>
			</main>
		</Layout>
	);
}

export default SavedMovies;
