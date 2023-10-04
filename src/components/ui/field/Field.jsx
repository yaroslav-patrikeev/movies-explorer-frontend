const Field = ({ register, name, type, error, options, ...rest }) => {
	return (
		<label className='field'>
			<input
				className='field__input'
				name={name}
				{...register(name, options)}
				{...rest}
			/>
			{error && <span className='field__error'>{error}</span>}
		</label>
	);
};

export default Field;
