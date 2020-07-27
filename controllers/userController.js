const express = require('express');
const userController = express.Router();

userController.get('/', (req, res, next) => {
    user = 'You';
    res.json(user);
});

module.exports = userController;