import './ModalError.css';

const ModalError = ({ text }) => {
	return (
		<div className={`modal-error ${text ? 'modal-error_show' : ''}`}>
			{text}
		</div>
	);
};

export default ModalError;
