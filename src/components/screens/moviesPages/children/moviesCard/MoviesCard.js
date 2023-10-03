import filmImg from '../../../../../images/_temp-film.png';

import './MoviesCard.css';

function MoviesCard({ type }) {
	const handleLikeClick = evt => {
		const element = evt.target;
		if (element.classList.contains('movies-card__button_like_passive')) {
			evt.target.classList.toggle('movies-card__button_like_active');
		}
	};
	return (
		<article className='movies-card'>
			<img src={filmImg} alt='' className='movies-card__image' />
			<h2 className='movies-card__title'>33 слова о дизайне</h2>
			{type === 'saved' ? (
				<div className='movies-card__button movies-card__button_delete'></div>
			) : (
				<div
					className='movies-card__button movies-card__button_like_passive'
					onClick={handleLikeClick}
				></div>
			)}
			<p className='movies-card__time'>1ч 42м</p>
		</article>
	);
}

export default MoviesCard;
