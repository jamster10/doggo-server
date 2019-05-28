'use strict';
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../config');

const table = 'users';
const AuthService = {
  getUserWithUserName(db, user_name) {
    return db
      .from(table)
      .where({user_name})
      .first();
  },
  confirmPassword(password, DB_password){
    return bcrypt.compare(password, DB_password);
  }
};

module.exports = AuthService;