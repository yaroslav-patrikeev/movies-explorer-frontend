import './Burger.css';

function Burger({ theme, setIsMenu }) {
	return (
		<>
			<button
				type='button'
				onClick={() => setIsMenu(true)}
				className={`burger ${theme !== 'dark' && 'burger_black'}`}
			></button>
		</>
	);
}

export default Burger;
