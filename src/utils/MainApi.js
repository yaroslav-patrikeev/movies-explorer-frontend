import axios from 'axios';

import { apiPath } from '../constants/paths.constants';

class MainApi {
	constructor() {
		this.axios = axios.create({
			baseURL: apiPath,
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
			...movie
		})
	}
}

export default new MainApi();
