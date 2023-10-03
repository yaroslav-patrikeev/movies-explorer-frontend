import logoImage from '../../../../images/logo-image.svg';

import './Promo.css';

function Promo({ handleClickToLearnMore }) {
	return (
		<section className='promo-title'>
			<div className='promo-title__content'>
				<div className='promo-title__text'>
					<h1 className='promo-title__title'>
						Учебный проект студента факультета Веб&#8209;разработки.
					</h1>
					<p className='promo-title__subtitle'>
						Листайте ниже, чтобы узнать больше про этот проект и его создателя.
					</p>
					<button
						type='button'
						onClick={handleClickToLearnMore}
						className='promo-title__button element-hover'
					>
						Узнать больше
					</button>
				</div>
				<img
					src={logoImage}
					className='promo-title__image'
					alt='sphere-words-web'
				/>
			</div>
		</section>
	);
}

export default Promo;
