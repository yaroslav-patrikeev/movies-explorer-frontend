import './MoviesCard.css';

function MoviesCard({
	type,
	film,
	isLiked,
	handleSaveMovie,
	handleDeleteMovie,
}) {
	const handleLikeClick = evt => {
		const element = evt.target;
		if (element.classList.contains('movies-card__button_like_passive')) {
			handleSaveMovie(film)
				.then(() => {
					evt.target.classList.remove('movies-card__button_like_passive');
					evt.target.classList.add('movies-card__button_like_active');
				})
				.catch(console.error);
		}
		if (element.classList.contains('movies-card__button_like_active')) {
			handleDeleteMovie(film.id)
				.then(() => {
					evt.target.classList.remove('movies-card__button_like_active');
					evt.target.classList.add('movies-card__button_like_passive');
				})
				.catch(console.error);
		}
	};
	const handleDeleteClick = async () => {
		await handleDeleteMovie(film.movieId);
	};

	const getTimeFromMins = mins => {
		let hours = Math.trunc(mins / 60);
		let minutes = mins % 60;
		return `${hours}ч ${minutes}м`;
	};

	return (
		<article className='movies-card'>
			<a href={film.trailerLink} className='movies-card__link' target='_blanc'>
				<img
					src={
						type === 'saved'
							? film.image
							: `https://api.nomoreparties.co/${film.image.url}`
					}
					alt={film.nameRU}
					className='movies-card__image'
				/>
			</a>
			<h2 className='movies-card__title'>{film.nameRU}</h2>

			{type === 'saved' ? (
				<div
					className='movies-card__button movies-card__button_delete'
					onClick={handleDeleteClick}
				></div>
			) : (
				<div
					className={`movies-card__button ${
						isLiked
							? 'movies-card__button_like_active'
							: 'movies-card__button_like_passive'
					} `}
					onClick={handleLikeClick}
				></div>
			)}
			<p className='movies-card__time'>{getTimeFromMins(film.duration)}</p>
		</article>
	);
}

export default MoviesCard;
