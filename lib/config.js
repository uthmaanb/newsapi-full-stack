module.exports = class Config {
	static create() {
		return new Config();
	}

	constructor() {
		this.apiKey = process.env.API_KEY;
	}
};
