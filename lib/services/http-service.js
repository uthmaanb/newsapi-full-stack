const restify = require("restify");

module.exports = class HttpService {
	#config;
	#articleEndpoint;

	static create(config, articleEndpoint) {
		return new HttpService(config, articleEndpoint);
	}

	constructor(config, articleEndpoint) {
		this.#config = config;
		this.#articleEndpoint = articleEndpoint;
	}

	async start() {
		var server = restify.createServer();
		server.use(restify.plugins.queryParser());
		server.get(
			"/articles",
			this.#articleEndpoint.getArticles.bind(this.#articleEndpoint)
		);
		server.use(function crossOrigin(req, res, next) {
			res.header("Access-Control-Allow-Origin", "*");
			res.header("Access-Control-Allow-Headers", "X-Requested-With");
			return next();
		});

		server.listen(8080, function () {
			console.log("%s listening at %s", server.url);
		});
	}
};
