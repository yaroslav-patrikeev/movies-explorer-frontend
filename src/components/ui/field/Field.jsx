import './Field.css';

const Field = ({ register, name, error, options, text, ...rest }) => {
	return (
		<label className='field'>
			{text}
			<input
				className={`field__input ${(error && 'field__input_error') || ''}`}
				{...register(name, options)}
				{...rest}
			/>
			{error && <span className='field__error'>{error}</span>}
		</label>
	);
};

export default Field;
