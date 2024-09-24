const express = require('express');
const mongoose = require('mongoose');
const User = require('../database/user');
const route = express.Router();

route.post('/', async(req, res) => {
    const {name, email} = req.body; // record names
    // add them to user
    let user = {};
    user.name = name;
    user.email = email;
    let userModel = new User(user);
    await userModel.save(); // save to database

    // send back usermodel response 
    res.json(userModel);
})

module.exports = route;