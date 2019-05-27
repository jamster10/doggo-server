'use strict';

const app = require('./app');
const { PORT, DB_URL } = require('./config');
const knex = require('knex');

const knexInstance = knex({
  client: 'pg',
  connection: DB_URL
});


app.set('db', knexInstance);
app.listen(PORT, console.log('Welcome to the MaTriX', PORT));



