const express = require('express');
const databaseConfig = require('./config/database.js');
const routesConfig = require('./config/routes.js');
const authController = require('./controllers/authController.js');

start();

async function start() {
    const app = express();
    await databaseConfig(app);
    routesConfig(app);

    app.listen(3000, () => console.log('Server listening on port 3000'));
}