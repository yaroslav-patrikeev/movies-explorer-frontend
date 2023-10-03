import Title from '../../../ui/title/Title';

import photo from '../../../../images/student-photo.jpg';

import './AboutMe.css';

function AboutMe() {
	return (
		<section className='about-me'>
			<div className='about-me__content'>
				<Title text='Студент' />
				<div className='about-me__about'>
					<div className='about-me__description'>
						<p className='about-me__name'>Ярослав</p>
						<p className='about-me__short-description'>
							Фронтенд-разработчик, 24 года
						</p>
						<p className='about-me__long-description'>
							Я&nbsp;родился в&nbsp;Коломне, живу в&nbsp;Москве.
							Программирование было интересным увлечением, возможностью
							переключаться. Пройдя путь обучения в&nbsp;Яндекс Практикуме
							я&nbsp;многое переосмыслил. Понял, что хочу приносить пользу
							людям, упрощая их жизнь, поэтому собираюсь связать свою жизнь
							с&nbsp;веб-разработкой.
						</p>
						<a
							rel='noreferrer'
							href='https://github.com/yaroslav-patrikeev'
							target='_blank'
							className='about-me__github-link element-hover'
						>
							Github
						</a>
					</div>
					<img src={photo} className='about-me__photo' alt='student' />
				</div>
			</div>
		</section>
	);
}

export default AboutMe;
