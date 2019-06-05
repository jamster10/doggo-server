'use strict';

const express = require('express')
const placesRouter = express.Router();
const requireAuth = require('../../util/jwt_auth');
//const placesService = require('./places-service');

placesRouter
  .route('/place/')
  .post(requireAuth, express.json(), (req, res, next) => {
    const { id, name } = req.body;
    const savedPlace = {
      //userId: req.get('user').id
      id,
      name
    };

    Object.keys(savedPlace).forEach(key => {
      if (!savedPlace[key]) return res.status(400).send({message: `Error saving place. Missing ${key}`});
    });
    //placesService.addPlace(savedPlace)

  });
  