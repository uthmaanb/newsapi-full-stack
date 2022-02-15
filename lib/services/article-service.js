module.exports = class ArticleService {
	#config;
	#newsApiGateway;

	static create(config, newsApiGateway) {
		return new ArticleService(config, newsApiGateway);
	}

	constructor(config, newsApiGateway) {
		this.#config = config;
		this.#newsApiGateway = newsApiGateway;
	}

	async getArticles(search) {
		return await this.#newsApiGateway.getArticles(search);
	}
};
