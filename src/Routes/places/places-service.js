'use strict';
const xss = require('xss');

const PlacesService = {
  
  savePlace(db, newPlace) {
    return db
      .insert(newPlace)
      .into('places')
      .returning('*')
      .then(newPlace => newPlace[0])

  },
  attributeUser(db, savedInfo) { //not used atm
    return db
      .insert(savedInfo)
      .into('users_places')
      .returning('*')
      .then(([newAttr]) => this.serializePlace(newAttr));
  },
  getPlaces(db, user) {
    return db
      .select('*')
      .from('places')
      .where('user_id', user)
      .then(places => places.map(place => this.serializePlace(place)));
  },

  getPlaceById(db, userid, placeid){
    return db
      .select('*')
      .from('user_places')
      .where('user_id', userid)
      
  },
  deletePlace(db, selection) {
    return db('places')
      .where('user_id', selection.currentUser)
      .andWhere('place_id', selection.placeId)
      .delete();

  },
  serializePlace(place) {
    return {
      place_id: xss(place.place_id),
      user_id: place.user_id,
      name: xss(place.name),
      address: xss(place.address),
      price_level: xss(place.price_level),
      rating: xss(place.rating),
      user_ratings_total: xss(place.user_ratings_total),
      saved: xss(place.saved),
    };
  }
};

module.exports = PlacesService;