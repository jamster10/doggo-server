'use strict';
const { logger } = require('./Logging-Winston_Morgan');
const { API_KEY } = require('../config');

module.exports = function (req, res, next) {
  const userToken = req.get('Authorization');
  if( !userToken || userToken.split(' ')[1] !== API_KEY){
    logger.error(`Unauthorized attempt using key: ${userToken ? userToken.split(' ')[1] : 'null'}`);
    let error = {
      status: 401,
      message: 'You do not have access to this server. GO AWAY, OR ELSE'
    };
    return res.status(401).send(error);
  }
  next();
};