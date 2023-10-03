import { forwardRef } from 'react';

import Title from '../../../ui/title/Title';

import './AboutProject.css';

function AboutProject({}, ref) {
	return (
		<section className='about-project' ref={ref}>
			<div className='about-project__content'>
				<Title text='О проекте' />
				<div className='about-project__columns'>
					<div className='about-project__column'>
						<h3 className='about-project__subtitle'>
							Дипломный проект включал 5 этапов
						</h3>
						<p className='about-project__description'>
							Составление плана, работу над бэкендом, вёрстку, добавление
							функциональности и финальные доработки.
						</p>
					</div>
					<div className='about-project__column'>
						<h3 className='about-project__subtitle'>
							На выполнение диплома ушло 5 недель
						</h3>
						<p className='about-project__description'>
							У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
							соблюдать, чтобы успешно защититься.
						</p>
					</div>
				</div>
				<div className='about-project__chart'>
					<span className='about-project__chart-one-week'>1 неделя</span>
					<span className='about-project__chart-five-weeks'>4 недели</span>
					<span className='about-project__chart-one-week-description'>
						Back-end
					</span>
					<span className='about-project__chart-five-weeks-description'>
						Front-end
					</span>
				</div>
			</div>
		</section>
	);
}

export default forwardRef(AboutProject);
