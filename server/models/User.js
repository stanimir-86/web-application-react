const { Schema, model } = require('mongoose');

const emailRegex = /^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value) => emailRegex.test(value),
            message: "Invalid emali!",
        }
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: [3, 'Username must be at least three charecters!'],
        maxlength: [10, 'Username must be at least ten charecters!'],

    },
    hashedPassword: { type: String, required: true, unique: true },
});

userSchema.index({ email: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);

module.exports = User;