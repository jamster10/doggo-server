'use strict';
require('dotenv').config();

module.exports = {
  'migrationDirectory': 'migrations',
  'driver': 'pg',
  'host': process.env.HOST,
  'port': process.env.DB_PORT,
  'database': process.env.MIGRATION_DATABASE,
  'username': process.env.USER,
  'password': process.env.PASSWORD
};

