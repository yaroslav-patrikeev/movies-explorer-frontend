import MoviesCard from '../moviesCard/MoviesCard';

import './MoviesCardList.css';

function MoviesCardList({ type, foundMovies, quantityCards }) {
	return (
		<div className='movies-card-list'>
			<div className='movies-card-list__content'>
				{foundMovies?.slice(0, quantityCards.cards).map(movie => (
					<MoviesCard
						type={type}
						film={movie}
						key={movie.id}
					/>
					
				))}
			</div>
		</div>
	);
}

export default MoviesCardList;
