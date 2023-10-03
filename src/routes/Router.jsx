import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from '../components/screens/auth/login/Login';
import Register from '../components/screens/auth/register/Register';
import Main from '../components/screens/main/Main';
import Movies from '../components/screens/moviesPages/movies/Movies';
import SavedMovies from '../components/screens/moviesPages/savedMovies/SavedMovies';
import NotFound from '../components/screens/notFound/NotFound';
import Profile from '../components/screens/profile/Profile';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/movies' element={<Movies />} />
				<Route path='/saved-movies' element={<SavedMovies />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/signin' element={<Login />} />
				<Route path='/signup' element={<Register />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
