'use strict';
require('dotenv').config();

module.exports ={
  PORT: process.env.PORT || 8080,
  NODE_ENV: process.env.NODE_ENV || 'development',
  API_KEY: process.env.API_KEY,
  TEST_DB_URL: process.env.TEST_DB_URL,
  DB_URL: process.env.DB_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRY: process.env.JWT_EXPIRATION
};
