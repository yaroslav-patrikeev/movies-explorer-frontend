import './MoreFilmsButton.css';

function MoreFilmsButton({ quantityCards, setQuantityCards }) {
	return (
		<>
			<div className='more-films'>
				<button
					type='button'
					onClick={() => {
						setQuantityCards({
							cards: quantityCards.cards + quantityCards.add,
							add: quantityCards.add,
						});
					}}
					className='more-films__button element-hover'
				>
					Ещё
				</button>
			</div>
		</>
	);
}

export default MoreFilmsButton;
