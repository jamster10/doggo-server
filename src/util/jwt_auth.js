'use strict';
const AuthService = require('../Routes/authentication/auth-service')
function requireAuth(req, res, next) {
  const token = req.get('authorization') || '';
  let bearerToken;

  if(!token.toLowerCase().startsWith('bearer ')) {
    return res.status(401).json({error: 'invalid credentials'});
  }
  bearerToken = token.split(' ')[1];

  try{
    const payload = AuthService.verifyJWT(bearerToken);
    AuthService.getUserWithUserName(
      req.app.get('db'),
      payload.sub
    )
      .then( user => {
        if(!user) res.status(401).json({error: 'invalid credentials'});
        req.user = user;
        next();
      });
  } catch (e){
    return res.status(401).json({error: 'invalid credentials'});
  }

}

module.exports = requireAuth;