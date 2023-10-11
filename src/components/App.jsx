import { useWindowSize } from '@uidotdev/usehooks';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import Login from './screens/Auth/Login/Login';
import Register from './screens/Auth/Register/Register';
import NotFound from './screens/NotFound/NotFound';
import Main from './screens/main/Main';
import Movies from './screens/moviesPages/movies/Movies';
import SavedMovies from './screens/moviesPages/savedMovies/SavedMovies';
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
	const [successText, setSuccessText] = useState('');
	const lastSearch = JSON.parse(localStorage.getItem('lastSearch'));
	const [foundMovies, setFoundMovies] = useState(lastSearch?.result || []);
	const [savedMovies, setSavedMovies] = useState([]);
	const [quantityCards, setQuantityCards] = useState(lastSearch?.quantityCards);
	const [isLoading, setIsLoading] = useState(false);
	const [isDisabled, setIsDisabled] = useState(true);
	const [isRequest, setIsRequest] = useState(false);
	const navigator = useNavigate();
	const size = useWindowSize();
	const location = useLocation();

	useEffect(() => {
		MainApi.getUser()
			.then(user => {
				navigator(location.pathname);
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

	useEffect(() => {
		if (isLoggedIn) {
			getSavedMovies();
		}
	}, [navigator]);

	const getSavedMovies = async () => {
		try {
			setIsLoading(true);
			const res = await MainApi.getSavedMovies();
			setSavedMovies(res.data);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	const handleRegister = async data => {
		try {
			setIsRequest(true);
			await MainApi.register(data);
			navigator('/movies');
			setIsLoggedIn(true);
		} catch (error) {
			setErrorText(error.message);
			setTimeout(() => {
				setErrorText('');
			}, 2000);
		} finally {
			setIsRequest(false);
		}
	};

	const handleUpdate = async data => {
		try {
			setIsRequest(true);
			await MainApi.updateUser(data);
			setCurrentUser(data);
			setSuccessText('Данные профиля успешно обновлены');
			setIsDisabled(true);
			setTimeout(() => {
				setSuccessText('');
			}, 2000);
		} catch (error) {
			setErrorText(error.response.data.message);
			setTimeout(() => {
				setErrorText('');
			}, 2000);
		} finally {
			setIsRequest(false);
		}
	};

	const handleLogout = async () => {
		await MainApi.logout();
		setIsLoggedIn(false);
		navigator('/');
	};

	const handleLogin = async data => {
		try {
			setIsRequest(true);
			await MainApi.login(data);
			setIsLoggedIn(true);
			navigator('/movies');
		} catch (error) {
			setErrorText(error.message);
			setTimeout(() => {
				setErrorText('');
			}, 2000);
		} finally {
			setIsRequest(false);
		}
	};

	const handleSearch = async data => {
		setIsRequest(true);
		setIsLoading(true);
		setQuantityCards(calculateQuantityInitialCards(size));
		await MoviesApi.searchAll(data.search)
			.then(res => {
				if (data.short) {
					res = res.filter(movie => movie.duration <= 40);
				}
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
			.finally(() => {
				setIsLoading(false);
				setIsRequest(false);
			});
	};

	const handleSaveMovie = async film => {
		setIsRequest(true);
		const movie = await MainApi.saveMovie(film);
		setIsRequest(false);
		return movie;
	};

	const handleDeleteMovie = async id => {
		setIsRequest(true);
		const res = await MainApi.deleteMovie(id);
		setSavedMovies(savedMovies.filter(movie => movie.movieId !== id));
		setIsRequest(false);
		return res;
	};

	const handleSearchSaved = async data => {
		setIsRequest(true);
		await getSavedMovies();
		if (data.search) {
			setSavedMovies(
				savedMovies.filter(movie => {
					return (
						movie['nameRU'].toLowerCase().includes(data.search) ||
						movie['nameEN'].toLowerCase().includes(data.search)
					);
				}),
			);
		}
		if (data.short) {
			setSavedMovies(savedMovies.filter(movie => movie.duration <= 40));
		}
		setIsRequest(false);
	};

	return (
		<CurrentUserContext.Provider value={currentUser}>
			<Routes>
				<Route path='/' element={<Main isLoggedIn={isLoggedIn} />} />
				<Route
					path='/signin'
					element={
						<Login
							handleLogin={handleLogin}
							errorText={errorText}
							isRequest={isRequest}
						/>
					}
				/>
				<Route
					path='/signup'
					element={
						<Register
							errorText={errorText}
							handleRegister={handleRegister}
							isRequest={isRequest}
						/>
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
									savedMovies={savedMovies}
									handleSaveMovie={handleSaveMovie}
									handleDeleteMovie={handleDeleteMovie}
									isRequest={isRequest}
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
							component={
								<SavedMovies
									savedMovies={savedMovies}
									isLoading={isLoading}
									handleDeleteMovie={handleDeleteMovie}
									handleSearchSaved={handleSearchSaved}
									isRequest={isRequest}
								/>
							}
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
									successText={successText}
									isDisabled={isDisabled}
									setIsDisabled={setIsDisabled}
									isRequest={isRequest}
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
