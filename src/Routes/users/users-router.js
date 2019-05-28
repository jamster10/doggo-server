'use strict';
const express = require('express');
const usersRouter = express.Router();
const UsersService = require('./users-service');
const validate = require('./validations')


usersRouter
  .route('/register')
  .post(express.json(), (req, res, next) => {
    const { user_name, nickname, password } = req.body;
    const newUser = { user_name, nickname, password };

    //credentials validations
    if (!user_name || !password) return res.status(400).json({message: 'invalid username or password'});
    const checkUser = validate.checkUserName(user_name);
    if (checkUser) return res.status(401).json(checkUser);
    const checkPassword = validate.checkPassword(password);
    if (checkPassword) return res.status(401).json(checkPassword);
    if(nickname){
      const checkNickname = validate.checkNickname(nickname);
      if (checkNickname) return res.status(401).json(checkNickname);
    }
    UsersService.checkIfUserExists(req.app.get('db'), user_name)
      .then(existingUser => {
        if(existingUser) return res.status(400).json({message: 'username already exists'});

        UsersService.hashPassword(password)
          .then(hashedPassword => {
            const newUser = {
              user_name,
              password: hashedPassword,
              nickname
            };
            if (!nickname) delete newUser.nickname;
            UsersService.createUser(req.app.get('db'), newUser)
              .then(user => res.status(201).json(UsersService.scrubUser(user)) );
          });
      })
      .catch(next);
  });

module.exports = usersRouter;