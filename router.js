 
const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');
const teamController = require('./controllers/teamController');

router.use('/user', userController);
router.use('/team', teamController);

module.exports = router;