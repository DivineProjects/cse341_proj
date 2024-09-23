const mongoose = require('mongoose');

// create database Model / table
const user = new mongoose.Schema({
    firstName:{ type: String},
    lastName:{ type: String}
});

module.exports = User = mongoose.model('user', user);