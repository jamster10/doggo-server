'use strict';
const bcrypt = require('bcrypt');

const table = 'users';
module.exports = {
  createUser(DB, userData) {
    return DB
      .insert(userData)
      .into(table)
      .returning('*')
      .then(newUser => newUser[0]);
  },

  deleteUser(DB, userId){
    return DB(table)
      .where('id', userId)
      .delete();
  },
  checkIfUserExists(DB, user_name) {
  
    return DB(table)
      .where({user_name})
      .first()
      .then(user => !!user);
  },
  hashPassword(password) {
    return bcrypt.hash(password, 12);
  }

};  