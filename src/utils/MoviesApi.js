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

	async searchAll(req) {
		const movies = await this.axios.get();
		const request = req.toLowerCase();
		const result = movies.data.filter(movie => {
			return (
				movie['nameRU'].toLowerCase().includes(request) ||
				movie['nameEN'].toLowerCase().includes(request)
			);
		});
		return result;
	}
}

export default new MoviesApi();
