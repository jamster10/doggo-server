'use strict';
const { NODE_ENV } = require('../config');

module.exports = {
  errorHandler: function errorHandler(err, req, res, next){
    let response;
    if( NODE_ENV === 'production'){
      response = {error: { message: 'Server Error'}};
    } else {
      console.log(err);
      response = {message: err.message, err};
    }
    res.status(err.status || 500).json(response);
  }

};