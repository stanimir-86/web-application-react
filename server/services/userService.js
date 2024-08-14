const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User.js');

const JWT_SECRET = 'dfjdfj45drdfhk!@tsrer';

async function register(email, password) {

    

    const existing = await User.findOne({ email })


    if (existing) {
        throw new Error('Email is taken!');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({

        email,
        hashedPassword
    });
    return createSesion(user);


};

async function login(email, password) {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Invalid email or password!');
    }
    const match = await bcrypt.compare(password, user.hashedPassword);
    if (!match) {
        throw new Error('Invalid email or password!');
    }
    return createSesion(user);
};

function createSesion(user) {
    const payload = {
        _id: user._id,
        email: user.email,
    };

    return {
        _id: user._id,
        email: user.email,
        accesToken: jwt.sign(payload, JWT_SECRET),
    }

};
function verifyToken(token) {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (err) {
        throw new Error('Invalid acces token!');
    }
};

module.exports = {
    register,
    login,
    verifyToken,
}