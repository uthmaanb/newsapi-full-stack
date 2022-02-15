describe('integration/app.js', () => {
    const expect = require('chai').expect;

    it('creates an app', () => {
        const app = require('../../lib/app.js');
    })

    it('configures an app',() => {
        process.env.API_KEY = 'test';
        const app = (require('../../lib/app.js')).create();
        app.configure();
        expect(app.config.apiKey).to.equal('test');
    })

    it('composes an app',() => {
        process.env.API_KEY = 'test';
        const app = (require('../../lib/app.js')).create();
        app.configure();
        app.compose();
        expect(app.container).to.exist;
        expect(app.container.getDependency('newsApiGateway')).to.exist;
        expect(app.container.getDependency('articleService')).to.exist;
        expect(app.container.getDependency('articleEndpoint')).to.exist;
        expect(app.container.getDependency('httpService')).to.exist;
    })

    it('starts an app', async () => {
        process.env.API_KEY = 'test';
        const app = (require('../../lib/app.js')).create();
        app.configure();
        app.compose();
        await app.start();
        
    })
})