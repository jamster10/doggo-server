'use strict';

const knex = require('knex');

const DB = knex({
  client: 'pg',
  connection: 'postgres://doggo-admin:dogs@localhost:5432/doggo-test'
});

function clearTables() {
  return DB.raw('TRUNCATE users').then(console.log).catch(console.log);
}

function cleanTable (){
  return DB('users')
    .truncate();  
}

function addData(){
  return DB
    .insert({
      user_name: 'jonh',
      password: '123a',
      nickname: 'kas'
    })
    .into('users')
    .returning('*')
    .then(console.log);
}

function showData () {
  return DB
    .select('*')
    .from('users')
    .then(console.log);
}

function kill() {
  DB.destroy();
}
cleanTable()
  .then(console.log)
  .catch(console.log);
  addData();

cleanTable()
  .then(console.log)
  .catch(console.log);
// showData();
// kill();



// x();


// clearTables();
// cleanTable();
// showData();