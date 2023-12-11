import Layout from '../../../layout/Layout';
import MoviesCardList from '../children/moviesCardList/MoviesCardList';
import Preloader from '../children/preloader/Preloader';
import SearchForm from '../children/searchForm/SearchForm';

function SavedMovies({
	savedMovies,
	isLoading,
	handleDeleteMovie,
	handleSearchSaved,
	isRequest,
}) {
	return (
		<Layout headerTheme='light' isLoggedIn={true}>
			<main className='main'>
				<SearchForm
					type='saved'
					handleSearchSaved={handleSearchSaved}
					isRequest={isRequest}
					savedMovies={savedMovies}
				/>
				{isLoading && <Preloader />}
				{!savedMovies[0] && <p className='not-result'>Ничего не найдено</p>}
				<MoviesCardList
					type='saved'
					filteredMovies={savedMovies}
					handleDeleteMovie={handleDeleteMovie}
					isRequest={isRequest}
				/>
			</main>
		</Layout>
	);
}

export default SavedMovies;
