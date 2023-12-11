import './ModalSuccess.css';

const ModalSuccess = ({ text }) => {
	return (
		<div className={`modal-success ${text ? 'modal-success_show' : ''}`}>
			{text}
		</div>
	);
};

export default ModalSuccess;
