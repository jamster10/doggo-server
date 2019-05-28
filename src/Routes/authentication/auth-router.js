'use strict';

const express = require('express');
const AuthService = require('./auth-service');
//const { requireAuth } require

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
            return res.status(200).end();
          });

      });

    

  });

module.exports = authRouter;
