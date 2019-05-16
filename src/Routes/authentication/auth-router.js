'use strict';

const express = require('express');





const authRouter = express.Router();

authRouter
  .route('/login')
  .post(express.json(), (req,res,next) => {
    const { user_name, password } = req.body;
    const loginUser = { user_name, password };

    for ( let [ key, value ] of Object.entries(loginUser)){
      if (value == null) return res.status(401).json({message: `missing ${key}`});
    }
  });
