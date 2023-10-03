import Layout from '../../../layout/Layout';
import MoreFilmsButton from '../children/moreFilmsButton/MoreFilmsButton';
import MoviesCardList from '../children/moviesCardList/MoviesCardList';
import SearchForm from '../children/searchForm/SearchForm';

function SavedMovies() {
	return (
		<Layout headerTheme='light' authorized={true}>
			<main className='main'>
				<SearchForm />
				<MoviesCardList type='saved' />
				<MoreFilmsButton />
			</main>
		</Layout>
	);
}

export default SavedMovies;
