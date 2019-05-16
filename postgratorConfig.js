'use strict';
require('dotenv').config();

module.exports = {
  'migrationDirectory': 'migrations',
  'driver': 'pg',
  'host': process.env.HOST,
  'port': process.env.PORT,
  'database': process.env.DATABASE,
  'username': process.env.USER,
  'password': process.env.PASSWORD
};

