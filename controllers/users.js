const { response } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const { validationResult } = require('express-validator');

const getUsers = (req, res = response) => {
    
    res.json({
        msg: "get API"
    });
}

const postUsers = async (req, res = response) => {    
    const {name, email, password} = req.body;
    const user = new User({name, email, password});   

    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);
    await user.save();
    res.json({
        msg: "post User",
        user
    })
}

const putUsers = (req, res = response) => {
    res.json({
        msg: "put User"
    })
}

const patchUsers = (req, res = response) => {
    res.json({
        msg: "patch User"
    })
}

const deleteUsers = (req, res = response) => {
    res.json({
        msg: "delete User"
    })
}

module.exports = {
    getUsers,
    postUsers,
    putUsers,
    patchUsers,
    deleteUsers
}