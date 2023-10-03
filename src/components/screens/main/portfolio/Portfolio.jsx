import './Portfolio.css';

const Portfolio = () => {
	return (
		<section className='portfolio'>
			<div className='portfolio__content'>
				<h3 className='portfolio__title'>Портфолио</h3>
				<ul className='portfolio__list'>
					<li>
						<a
							rel='noreferrer'
							target='_blank'
							className='portfolio__item element-hover'
							href='https://github.com/yaroslav-patrikeev/how-to-learn'
						>
							Статичный сайт
							<div className='portfolio__item-image' />
						</a>
					</li>
					<li>
						<a
							rel='noreferrer'
							target='_blank'
							className='portfolio__item element-hover'
							href='https://github.com/yaroslav-patrikeev/russian-travel'
						>
							Адаптивный сайт
							<div className='portfolio__item-image' />
						</a>
					</li>
					<li>
						<a
							rel='noreferrer'
							target='_blank'
							className='portfolio__item portfolio__item_last element-hover'
							href='https://github.com/yaroslav-patrikeev/react-mesto-api-full-gha'
						>
							Одностраничное приложение
							<div className='portfolio__item-image' />
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Portfolio;
