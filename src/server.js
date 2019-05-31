'use strict';

const app = require('./app');
const { PORT, TEST_DB_URL } = require('./config');
const knex = require('knex');

const knexInstance = knex({
  client: 'pg',
  connection: TEST_DB_URL
});
//WARNING CONNECTED TO TEST DB

app.set('db', knexInstance);
app.listen(PORT, console.log('Welcome to the MaTriX-TESTx', PORT));



