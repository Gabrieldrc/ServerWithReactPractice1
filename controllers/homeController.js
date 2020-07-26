const express = require('express');
const homeController = express.Router();

homeController.get('/', (req, res, next) => {
    user = 'Nombre'
    res.json(user);
});

module.exports = homeController;