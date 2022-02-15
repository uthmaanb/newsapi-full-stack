module.exports = class Container {
	#config;
	#deps;

	static create(config) {
		return new Container(config);
	}

	constructor(config) {
		this.#config = config;
	}

	registerDependencies() {
		this.#deps = {};
		this.#deps.newsApiGateway = require("./gateways/news-api-gateway").create(
			this.#config
		);
		this.#deps.articleService = require("./services/article-service").create(
			this.#config,
			this.#deps.newsApiGateway
		);
		this.#deps.articleEndpoint = require("./endpoints/article-endpoint").create(
			this.#config,
			this.#deps.articleService
		);
		this.#deps.httpService = require("./services/http-service").create(
			this.#config,
			this.#deps.articleEndpoint
		);
	}

	getDependency(key) {
		return this.#deps[key];
	}

	async start() {
		await this.#deps.httpService.start();
	}
};
