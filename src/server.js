const express = require('express');


const routes = require('./routes');
const app = express();

app.use(routes);

app.get('/users', (req, res) => knex('users').then((results) => res.json(results)))

app.listen(3333, () => console.log('Server is running'));