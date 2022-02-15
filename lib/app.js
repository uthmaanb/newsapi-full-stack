module.exports = class Application {
	#config;
	#container;

	static create(config, container) {
		return new Application(config, container);
	}

	constructor(config, container) {
		this.#config = config;
		this.#container = container;
	}

	configure() {
		this.#config = require("./config.js").create();
	}

	get config() {
		return this.#config;
	}

	compose() {
		this.#container = require("./container").create(this.#config);
		this.#container.registerDependencies();
	}

	get container() {
		return this.#container;
	}

	async start() {
		await this.#container.start();
	}
};
