const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SunglassesSchema = new Schema({
    brand: {
        type: String,
        required: [true, 'Brand is required'],
        trim: true,
        minlength: [2, 'Brand must be at least 2 characters long'],
    },
    model: {
        type: String,
        required: [true, 'Model is required'],
        trim: true,
        minlength: [2, 'Model must be at least 2 characters long'],
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price must be a positive number'],
    },
    color: {
        type: String,
        required: [true, 'Color is required'],
        trim: true,
    },
    lensMaterial: {
        type: String,
        required: [true, 'Lens material is required'],
        trim: true,
    },
    frameMaterial: {
        type: String,
        required: [true, 'Frame material is required'],
        trim: true,
    },
    polarized: {
        type: Boolean,
        default: false,
    },
    uvProtection: {
        type: Number,
        min: [0, 'UV protection must be between 0 and 100'],
        max: [100, 'UV protection must be between 0 and 100'],
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value',
        },
    },
    stock: {
        type: Number,
        required: [true, 'Stock is required'],
        min: [0, 'Stock must be a positive number'],
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value',
        },
    },
    description: {
        type: String,
        trim: true,
    },
    images: [
        {
            url: {
                type: String,
                required: [true, 'Image URL is required'],
                validate: {
                    validator: function (v) {
                        return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(v);
                    },
                    message: props => `${props.value} is not a valid URL`,
                },
            },
            altText: {
                type: String,
                trim: true,
            },
        },
    ],
    dateAdded: {
        type: Date,
        default: Date.now,
    },
});

const Sunglasses = mongoose.model('Sunglasses', SunglassesSchema);

module.exports = Sunglasses;