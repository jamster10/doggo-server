'use strict';

const express = require('express');
const AuthService = require('./auth-service');
const requireAuth = require('../../util/jwt_auth')

const authRouter = express.Router();

const invalid = { message: 'invalid username or password' };

authRouter
  .route('/login')
  .post(express.json(), (req,res,next) => {
    const { user_name, password } = req.body;
    const loginUser = { user_name, password };

    for ( let [ key, value ] of Object.entries(loginUser))
      if (value == null) return res.status(400).json({message: `missing ${key}`});

    //Remember this is async so use chaining
    AuthService.getUserWithUserName(req.app.get('db'), user_name)
      .then( user => {
        if (!user) return res.status(401).json(invalid);
        AuthService.confirmPassword(password, user.password)
          .then(match => {
            if(!match) return res.status(401).json(invalid);
            
            //set up JWT
            const subject = user.user_name;
            const payload = { user_id: user.id };
            res.status(200).send({ token: AuthService.createJwt(subject, payload) });
          });

      })
      .catch(next);
  });

authRouter
  .route('/refresh')
  .post(requireAuth, (req, res, next) => {
    const subject = req.user.user_name;
    const payload = { user_id: req.user.id };

    res.status(200).send(AuthService.createJwt(subject, payload));
  });

module.exports = authRouter;
