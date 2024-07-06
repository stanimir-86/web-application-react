const { Schema, model } = require('mongoose');


const userSchema = new Schema({
    username: { type: String, required: true },
    hashedPassword: { type: String, required: true },
    unique: true,
    minlength: [3, 'Username must be at least three charecters!'],
    maxlength: [10, 'Username must be at least ten charecters!'],

});

userSchema.index({ username: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);

module.exports = User;