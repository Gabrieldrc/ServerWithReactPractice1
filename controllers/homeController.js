const express = require('express');
const homeController = express.Router();

homeController.get('/', (req, res, next) => {
    res.json({user: 'invited'});
});

module.exports = homeController;