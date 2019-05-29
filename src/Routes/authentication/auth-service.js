'use strict';
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../config');

const table = 'users';
const AuthService = {
  getUserWithUserName(db, user_name) {
    return db
      .from(table)
      .where({ user_name })
      .first();
  },
  confirmPassword(password, DB_password){
    return bcrypt.compare(password, DB_password);
  },
  createJwt(subject, payload){
    return jwt.sign(payload, config.JWT_SECRET,{
      subject,
      algorithm: 'HS256',
      expiresIn: config.JWT_EXPIRY
    });
  },
  verifyJWT(token) {
    return jwt.verify(token, config.JWT_SECRET, {
      algorithms: ['HS256'],
    });
  }
};

module.exports = AuthService;