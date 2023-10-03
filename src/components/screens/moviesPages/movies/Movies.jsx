import Layout from '../../../layout/Layout';
import MoreFilmsButton from '../children/moreFilmsButton/MoreFilmsButton';
import MoviesCardList from '../children/moviesCardList/MoviesCardList';
import SearchForm from '../children/searchForm/SearchForm';

function Movies() {
	return (
		<Layout headerTheme='light' authorized={true}>
			<main>
				<SearchForm />
				<MoviesCardList />
				<MoreFilmsButton />
			</main>
		</Layout>
	);
}

export default Movies;
