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
				/>
				{isLoading && <Preloader />}
				{Object.keys(savedMovies).length === 0 && (
					<p className='not-result'>Ничего не найдено</p>
				)}
				<MoviesCardList
					type='saved'
					foundMovies={savedMovies}
					handleDeleteMovie={handleDeleteMovie}
					isRequest={isRequest}
				/>
			</main>
		</Layout>
	);
}

export default SavedMovies;
