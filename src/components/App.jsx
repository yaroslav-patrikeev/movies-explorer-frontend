import { useWindowSize } from '@uidotdev/usehooks';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import Login from './screens/auth/login/Login';
import Register from './screens/auth/register/Register';
import Main from './screens/main/Main';
import Movies from './screens/moviesPages/movies/Movies';
import SavedMovies from './screens/moviesPages/savedMovies/SavedMovies';
import NotFound from './screens/notFound/NotFound';
import Profile from './screens/profile/Profile';

import { CurrentUserContext } from '../contexts/CurrentUserContext';
import MainApi from '../utils/MainApi';
import MoviesApi from '../utils/MoviesApi';
import { calculateQuantityInitialCards } from '../utils/calculateQuantityInitialCards';

import ProtectedRoute from './ProtectedRoute';

const Router = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [currentUser, setCurrentUser] = useState({});
	const [errorText, setErrorText] = useState('');
	const lastSearch = JSON.parse(localStorage.getItem('lastSearch'));
	const [foundMovies, setFoundMovies] = useState(lastSearch?.result);
	const [quantityCards, setQuantityCards] = useState(lastSearch?.quantityCards);
	const [isLoading, setIsLoading] = useState(false);
	const navigator = useNavigate();
	const size = useWindowSize();

	useEffect(() => {
		MainApi.getUser()
			.then(user => {
				setIsLoggedIn(true);
				setCurrentUser(user.data);
			})
			.catch(error => {
				setTimeout(() => {
					setErrorText(error);
					setErrorText('');
				}, 2000);
			});
	}, [isLoggedIn]);

	const handleRegister = async data => {
		try {
			await MainApi.register(data);
			navigator('/movies');
			setIsLoggedIn(true);
		} catch (error) {
			setErrorText(error.response.data.message);
			setTimeout(() => {
				setErrorText('');
			}, 2000);
		}
	};

	const handleUpdate = async data => {
		try {
			await MainApi.updateUser(data);
			navigator('/movies');
			setCurrentUser(data);
		} catch (error) {
			setErrorText(error.response.data.message);
			setTimeout(() => {
				setErrorText('');
			}, 2000);
		}
	};

	const handleLogout = async () => {
		await MainApi.logout();
		setIsLoggedIn(false);
		navigator('/');
	};

	const handleLogin = async data => {
		try {
			await MainApi.login(data);
			setIsLoggedIn(true);
			navigator('/movies');
		} catch (error) {
			setErrorText(error.response.data.message);
			setTimeout(() => {
				setErrorText('');
			}, 2000);
		}
	};

	const handleSearch = async data => {
		setIsLoading(true);
		setQuantityCards(calculateQuantityInitialCards(size));
		await MoviesApi.searchAll(data.search)
			.then(res => {
				setFoundMovies(res);
				localStorage.setItem(
					'lastSearch',
					JSON.stringify({
						text: data.search,
						short: data.short,
						result: res,
						quantityCards,
					}),
				);
			})
			.catch(() => {
				setErrorText(
					'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
				);
				setTimeout(() => {
					setErrorText('');
				}, 2000);
			})
			.finally(() => setIsLoading(false));
	};
	return (
		<CurrentUserContext.Provider value={currentUser}>
			<Routes>
				<Route path='/' element={<Main isLoggedIn={isLoggedIn} />} />
				<Route
					path='/signin'
					element={<Login handleLogin={handleLogin} errorText={errorText} />}
				/>
				<Route
					path='/signup'
					element={
						<Register errorText={errorText} handleRegister={handleRegister} />
					}
				/>
				<Route
					path='/movies'
					element={
						<ProtectedRoute
							isLoggedIn={isLoggedIn}
							component={
								<Movies
									setQuantityCards={setQuantityCards}
									quantityCards={quantityCards}
									foundMovies={foundMovies}
									lastSearch={lastSearch}
									setIsLoading={setIsLoading}
									isLoading={isLoading}
									errorText={errorText}
									handleSearch={handleSearch}
									size={size}
								/>
							}
						/>
					}
				/>
				<Route
					path='/saved-movies'
					element={
						<ProtectedRoute
							isLoggedIn={isLoggedIn}
							component={<SavedMovies />}
						/>
					}
				/>
				<Route
					path='/profile'
					element={
						<ProtectedRoute
							isLoggedIn={isLoggedIn}
							component={
								<Profile
									errorText={errorText}
									handleUpdate={handleUpdate}
									handleLogout={handleLogout}
								/>
							}
						/>
					}
				/>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</CurrentUserContext.Provider>
	);
};

export default Router;
