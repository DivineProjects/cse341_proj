const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    favoriteColor: {
        type: String,
        required: false,
    },
    birthday: {
        type: Date,
        required: false,
    }
});


module.exports = mongoose.model('UserDB', userSchema);
