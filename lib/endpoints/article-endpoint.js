const { response } = require("express");

module.exports = class ArticleEndpoint {
	#config;
	#articleService;

	static create(config, articleService) {
		return new ArticleEndpoint(config, articleService);
	}

	constructor(config, articleService) {
		this.#config = config;
		this.#articleService = articleService;
	}

	getArticles(req, res, next) {
		this.#articleService.getArticles(req.query.search).then((articles) => {
			// console.log(articles);
			res.send(articles);
			next();
		});
	}
};
