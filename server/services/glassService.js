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
};
async function getMyLikes(id) {
    const glasses = await Sunglasses.find({});
    let result = [];
    glasses.map(x => {
        if (!!(x.likes.includes(id))) {
            result.push(x);
        }
    });
    return result;
};

async function update(id, glasses) {

    const existing = await Sunglasses.findById(id);
    existing.brand = glasses.brand;
    existing.model = glasses.model;
    existing.price = glasses.price;
    existing.color = glasses.color;
    existing.lensMaterial = glasses.lensMaterial;
    existing.frameMaterial = glasses.frameMaterial;
    existing.polarized = glasses.polarized;
    existing.uvProtection = glasses.uvProtection;
    existing.stock = glasses.stock;
    existing.description = glasses.description;
    existing.images = glasses.images;
    existing.dateAdded = glasses.dateAdded;

    return existing.save();
};

async function deleteLikes(id, userId) {
    const existing = await Sunglasses.findById(id);
    existing.likes = existing.likes.filter(x => x != userId);
    return existing.save();
};

async function deleteById(id) {
    return Sunglasses.findByIdAndDelete(id);
};

async function likeSunglasses(glassesId, userId) {
    const existing = await Sunglasses.findById(glassesId);
    existing.likes.push(userId);
    return existing.save();
}
module.exports = {
    getAll,
    getByUserId,
    getById,
    create,
    getMyLikes,
    update,
    deleteLikes,
    deleteById,
    likeSunglasses,
};