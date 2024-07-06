const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'dfjdfj45drdfhk!@tsrer';

async function register(username, password) {

    const existing = await User.findOne({ username })
        .collation({ locale: 'en,strength:2' });

    if (existing) {
        throw new Error('Username is taken!');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        username,
        hashedPassword
    });
    const token = createSesion(user);

    return token;
};

async function login() {

};

function verifyToken() {

};

function createSesion({ _id, username }) {
    const payload = {
        _id,
        username,
    };

    const token = jwt.sign(payload, JWT_SECRET);
    return token;
};

module.exports = {
    register,
    login,
    verifyToken,


}