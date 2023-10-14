import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component, isLoggedIn }) => {
	return isLoggedIn ? component : <Navigate to='/' />;
};

export default ProtectedRoute;
