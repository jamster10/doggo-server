'use strict';
require('dotenv').config();

module.exports = {
  'migrationDirectory': 'migrations',
  'driver': 'pg',
  'host': process.env.PRODUCTION_HOST,
  'port': process.env.PRODUCTION_DB_PORT,
  'database': process.env.PRODUCTION_DB_NAME,
  'username': process.env.PRODUCTION_USER,
  'password': process.env.PRODUCTION_PASSWORD,
  'ssl': true
};
