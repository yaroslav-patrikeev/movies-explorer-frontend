import axios from 'axios';

class MoviesApi {
	constructor() {
		this.axios = axios.create({
			baseURL: 'https://api.nomoreparties.co/beatfilm-movies',
			headers: {
				'Content-Type': 'application/json',
			},
		});
	}

	async searchAll() {
		const movies = await this.axios.get();
		return movies;
	}
}

export default new MoviesApi();
