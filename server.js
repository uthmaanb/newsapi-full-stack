const app = require("./lib/app.js").create();
app.configure();
app.compose();
app.start();
