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
    console.log('32 roll userservice' + user);
    console.log('33 roll userservice' + email);


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
    let userId = (user._id).toString();
    console.log('48 roll userservice' + user);

    const payload = {
        _id: userId,
        email: user.email,
    };

    console.log("row 55 user service" + user.email);
    console.log("rol 56" + jwt.sign(payload, JWT_SECRET));

    return {
        _id: userId,
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