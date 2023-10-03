import Film from '../moviesCard/MoviesCard';

import './MoviesCardList.css';

function MoviesCardList({ type }) {
	return (
		<div className='movies-card-list'>
			<div className='movies-card-list__content'>
				<Film type={type} />
				<Film type={type} />
				<Film type={type} />
				<Film type={type} />
				<Film type={type} />
			</div>
		</div>
	);
}

export default MoviesCardList;
