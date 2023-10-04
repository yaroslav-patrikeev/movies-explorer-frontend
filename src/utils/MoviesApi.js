class MoviesApi {
	async #getData() {
		const response = await fetch(
			'https://api.nomoreparties.co/beatfilm-movies',
		);
		const data = await response.json();
		return data;
	}

	async searchAll(req) {
		const movies = await this.#getData();
		const request = req.toLowerCase();
		const result = movies.filter(movie => {
			return (
				movie['nameRU'].toLowerCase().includes(request) ||
				movie['nameEN'].toLowerCase().includes(request)
			);
		});
		return result;
	}
}

export default new MoviesApi();
