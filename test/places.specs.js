'use strict';
/* global request, expect*/

const knex = require('knex');
const helpers = require('./testHelpers');
const app = require('../src/app');


describe('Places endpoints working', () => {
  let db;

  before('Create DB connection', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL
    });
    app.set('db', db);
  });

  before('Clean Tables', () => {
    return helpers.clearTables(db);
  });

  after('Disconnect from DB', () =>  db.destroy() );

  context('Places POST works', () => {
    it('Resolves wrong info', () => {
      return request(app)
        .post('/places')
        .send({password: 'user'})
        .expect(400);
    });
  });

  context('The places table has data', () => {
    before('Seed palce data', () => {
      helpers.seedPlaces(db);
    });

    const existingPlace = helpers.makePlaces()[0];
    existingPlace.place_id = 'sfhkeocmdha03'

    it('resolves adding a place', () => {
      return request(app)
        .get('/places')
        .expect(200);
    });

    it('resolves a new PLace', () => {
      return request(app)
        .post('/places')
        .send(existingPlace)
        .expect(201)
        .then(newPlace => {
          expect(newPlace).to.exist();
        });
    });

    it('resolves deleting a palce', () => {
      return request(app)
        .delete('/places/id')
        .expect(203)
    });
  });
});
  