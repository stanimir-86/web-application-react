const express = require('express');
const app = express();
const cors=require('./middlewares/cors.js');
const CONNECTION_STRING = 'mongodb://127.0.0.1:27017/sunglasses';
const { mongoose } = require('mongoose');
const router = require('./config/routes.js');
const session = require('./middlewares/session.js');
mongoose.set('strictQuery', true);



const startDB = () => mongoose.connect(CONNECTION_STRING);

start();

async function start() {
    startDB();
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cors());
    app.use(session());

    
    
    app.use(router);
    app.listen("3030", () => console.log('Server listening on port 3030'));
}