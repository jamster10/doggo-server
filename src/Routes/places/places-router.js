'use strict';

const express = require('express');
const placesRouter = express.Router();
const requireAuth = require('../../util/jwt_auth');
const PlacesService = require('./places-service');

placesRouter
  .route('/')
  .post(requireAuth, express.json(), (req, res, next) => {
    const { address, name, place_id, price_level, rating, user_ratings_total, saved } = req.body;
    const savedPlace = {
      address, name, place_id, price_level, rating, user_ratings_total, saved
    };

    for (const [key, value] of Object.entries(savedPlace))
      if (value == null)
        return res.status(400).json({
          message: `Missing '${key}' in request body`
        });
  

    const currentUser = req.user.id;
    savedPlace.user_id = currentUser;
    PlacesService.savePlace(req.app.get('db'),savedPlace)
      .then(newPlace => {
        if(!newPlace) return res.status(500).send({message: 'Error saving place.'});
        return res.status(201).json(newPlace);
      });
  

    //placesService.addPlace(savedPlace)

  })
  .get(requireAuth, (req, res, next) => {
    const currentUser = req.user.id;
    PlacesService.getPlaces(req.app.get('db'), currentUser)
      .then(savedPlaces => {
        if(!savedPlaces) return res.status(200).json({message: 'No saved placed'});
        return res.status(200).json(savedPlaces);
      });
  });

placesRouter
  .route('/:placeId')
  .delete(requireAuth, (req, res, next) => {
    const currentUser = req.user.id;
    const placeId = req.params.placeId;

    PlacesService.deletePlace(req.app.get('db'), {currentUser, placeId})
      .then(_ => {
        return res.status(204).end();
      })
      .catch(_ => res.status(500).json({message: 'There was a problem deleting the resource.'}));
    

  });

module.exports = placesRouter;
  