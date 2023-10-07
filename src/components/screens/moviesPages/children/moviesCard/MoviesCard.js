import './MoviesCard.css';

function MoviesCard({ type, title, image, trailerLink, duration }) {
	const handleLikeClick = evt => {
		const element = evt.target;
		if (element.classList.contains('movies-card__button_like_passive')) {
			evt.target.classList.toggle('movies-card__button_like_active');
		}
	};

	const getTimeFromMins = mins => {
		let hours = Math.trunc(mins / 60);
		let minutes = mins % 60;
		return `${hours}ч ${minutes}м`;
	};

	return (
		<article className='movies-card'>
			<a href={trailerLink} className='movies-card__link' target='_blanc'>
				<img
					src={`https://api.nomoreparties.co/${image}`}
					alt={title}
					className='movies-card__image'
				/>
			</a>
			<h2 className='movies-card__title'>{title}</h2>

			{type === 'saved' ? (
				<div className='movies-card__button movies-card__button_delete'></div>
			) : (
				<div
					className='movies-card__button movies-card__button_like_passive'
					onClick={handleLikeClick}
				></div>
			)}
			<p className='movies-card__time'>{getTimeFromMins(duration)}</p>
		</article>
	);
}

export default MoviesCard;
