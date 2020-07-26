 
const express = require('express');
const router = express.Router();
const homeController = require('./controllers/homeController');
const teamController = require('./controllers/teamController');

router.use('/', homeController);
router.use('/team', teamController);

module.exports = router;