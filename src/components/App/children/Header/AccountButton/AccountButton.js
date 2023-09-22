import icon from '../../../../../images/people-for-account-button.svg	';
import './AccountButton.css';
function AccountButton() {
	return (
		<button className='header__account-button'>
			Аккаунт{' '}
			<div class='header__circle-for-button'>
				<img src={icon} alt='people for account button' />
			</div>{' '}
		</button>
	);
}

export default AccountButton;
