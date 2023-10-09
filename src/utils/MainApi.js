import axios from 'axios';

import { apiPath } from '../constants/paths.constants';

class MainApi {
	constructor() {
		this.axios = axios.create({
			baseURL: apiPath,
			withCredentials: true,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	}

	async login({ email, password }) {
		await this.axios.post('/signin', {
			email,
			password,
		});
	}

	async register({ email, password, userName }) {
		const { data } = await this.axios.post('/signup', {
			email,
			password,
			userName,
		});

		if (data) {
			await this.login({ email, password });
		}
	}

	async saveMovie(movie) {
		await this.axios.post('/movies', {
			country: movie.country,
			director: movie.director,
			duration: movie.duration,
			year: movie.year,
			description: movie.description,
			image: `https://api.nomoreparties.co${movie.image.url}`,
			trailerLink: movie.trailerLink,
			thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
			movieId: movie.id,
			nameRU: movie.nameRU,
			nameEN: movie.nameEN,
		});
	}

	async deleteMovie(_id) {
		await this.axios.delete(`/movies/${_id}`);
	}

	async getUser() {
		return await this.axios.get('/users/me');
	}

	async updateUser(data) {
		return await this.axios.patch('/users/me', data);
	}
	async logout() {
		return await this.axios.post('/signout');
	}
}

export default new MainApi();
