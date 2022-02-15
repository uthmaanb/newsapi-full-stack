const axios = require("axios");

module.exports = class NewsApiGateway {
	#apiKey;

	static create(config) {
		return new NewsApiGateway(config);
	}

	constructor(config) {
		this.#apiKey = config.apiKey;
		// for demo purposes only
		// console.log("set api key", this.#apiKey);
	}

	async getArticles(search) {
		const response = await axios.get(
			`https://newsapi.org/v2/everything?q=${search}&from=2022-02-14&language=en&sortBy=popularity&pageSize=100&apiKey=${
				this.#apiKey
			}`
		);
		return response.data;
	}
};
