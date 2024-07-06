const express = require('express');
const app = express();
//cors is needed
const CONNECTION_STRING = 'mongodb://127.0.0.1:27017/reactapplication';
const { mongoose } = require('mongoose');
// const databaseConfig = require('./config/database.js');
// const routesConfig = require('./config/routes.js');

const router = require('./config/routes.js');
//sesion
const startDB = () => mongoose.connect(CONNECTION_STRING);
start();

async function start() {
    startDB();
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(router)
    // routesConfig(app);

    app.listen("3030", () => console.log('Server listening on port 3030'));
}