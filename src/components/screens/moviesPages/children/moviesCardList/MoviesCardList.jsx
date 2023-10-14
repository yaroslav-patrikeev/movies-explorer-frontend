import MoviesCard from '../moviesCard/MoviesCard';

import './MoviesCardList.css';

function MoviesCardList({
	type,
	quantityCards,
	savedMovies,
	handleSaveMovie,
	handleDeleteMovie,
	isRequest,
	filteredMovies,
}) {
	return (
		<div className='movies-card-list'>
			<div className='movies-card-list__content'>
				{filteredMovies?.slice(0, quantityCards?.cards).map(movie => (
					<MoviesCard
						type={type}
						film={movie}
						isLiked={savedMovies?.some(
							savedMovie => savedMovie.movieId === movie.id,
						)}
						isRequest={isRequest}
						key={type === 'saved' ? movie.movieId : movie.id}
						handleSaveMovie={handleSaveMovie}
						handleDeleteMovie={handleDeleteMovie}
					/>
				))}
			</div>
		</div>
	);
}

export default MoviesCardList;
