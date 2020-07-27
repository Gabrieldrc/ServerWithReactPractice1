const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorhandler = require('errorhandler');

//Creation of the app and Port
const app = express();
const PORT = process.env.PORT || 4000;

//Api router require
const router = require('./router.js');

// Middlewares
app.use(cors());
app.use(errorhandler());
app.use(bodyParser.json());

//Api router
app.use('/', router);


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});

module.exports = app;