const { Schema, model, Types: { ObjectId } } = require('mongoose');

const URL_PATTERN = /https?:\/\/./i;

const itemsSchem = new Schema({
    name: {
        type: String,
        required: true,
        minlength: [2, "Name must be minimum two characters!"],
        maxlength: [30, "Name must be maximum thirty characters!"],
    },

    type: {
        type: String,
        required: true,
        enum: ['Flat',"Curved"],
    },
    img: {
        type: String,
        validate: {
            validator: (value) => URL.URL_PATTERN.test(value),
            likes: { type: Array, default: [], required: false },
        }
    },
    kilograms: { type: Number, required: true },
    sizes: { type: Number, required: true },


});

const Items = model('Items', itemsSchem);
module.exports = Items;