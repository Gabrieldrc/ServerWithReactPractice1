const express = require('express');
const teamController = express.Router();

teamController.get('/', (req, res, next) => {
    const team = [
        {id: 1, firstName: 'Pepe', lastName: 'Perez', position: 'Programador Front-end'},
        {id: 2, firstName: 'Riky', lastName: 'Ricón', position: 'Programador Back-end'},
        {id: 3, firstName: 'Tina', lastName: 'Truman', position: 'Programador Fullstack'},
        {id: 4, firstName: 'Valeria', lastName: 'Vergara', position: 'Diseñadora'},
        {id: 5, firstName: 'Andres', lastName: 'Aristigueta', position: 'DBA'},
        {id: 6, firstName: 'Pepe', lastName: 'Perez', position: 'Programador Front-end'},
        {id: 7, firstName: 'Riky', lastName: 'Ricón', position: 'Programador Back-end'},
        {id: 8, firstName: 'Tina', lastName: 'Truman', position: 'Programador Fullstack'},
        {id: 9, firstName: 'Valeria', lastName: 'Vergara', position: 'Diseñadora'},
        {id: 10, firstName: 'Andres', lastName: 'Aristigueta', position: 'DBA'}
    ];

    res.json(team);
});

module.exports = teamController;