const express = require('express');

const app = express();

const PORT = process.env.PORT || 4000;

app.get('/api/customers', (req, res, next) => {
    const customers = [
        {id: 1, firstName: 'Pepe', lastName: 'Perez'},
        {id: 2, firstName: 'Riky', lastName: 'Ricón'},
        {id: 3, firstName: 'Tina', lastName: 'Truman'}
    ];

    res.json(customers);
});


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})