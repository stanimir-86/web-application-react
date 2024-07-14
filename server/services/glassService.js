const { model } = require('mongoose');
const Sunglasses = require('../models/Sunglasses.js');

async function getAll() {
    return Sunglasses.find({});
};

async function getByUserId(userId) {
    return Sunglasses.find({ _ownerId: userId });
};

async function getById(id) {
    return Sunglasses.findById(id).populate('_ownerId');
};

async function create(data) {
    return Sunglasses.create(data);
}

module.exports = {
    getAll,
    getByUserId,
    getById,
    create,
    
};