'use strict';
/*global request, expect*/
const app = require ('../src/app');
const helpers = require('./testHelpers');
const knex = require('knex');
const jwt = require('jsonwebtoken');
require('dotenv').config();

describe('Authentication Endpoints', ()=> {
  let db;
  
  before('Set up the DB', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL
    });
    app.set('db', db);
  });

  before('Clear the tables', ()=> {
    return helpers.clearTables(db);
  });

  before('add users to table', () => {
    return helpers.seedUsers(db);
  });

  after('Clear the tables', ()=> {
    return helpers.clearTables(db);
  });

  after('Destroy connection to DB', () => {
    return db.destroy();
  });

  context('Bad credentials', () =>{
    it('returns 400 if no password', () => {
      return request(app)
        .post('/api/auth/login')
        .send({user_name: 'Johnny'})
        .expect(400, {message: 'missing password'});
    });
    
    it('returns 400 if no username', () => {
      return request(app)
        .post('/api/auth/login')
        .send({password: 'password'})
        .expect(400, {message: 'missing user_name'});
    });
    
    it('resolves a nonexistent user in db', () => {
      return request(app)
        .post('/api/auth/login')
        .send({user_name: 'jhendrix', password: 'password'})
        .expect(401, {message: 'invalid username or password'});
    });
    
    it('resolves a bad password entry', () => {
      return request(app)
        .post('/api/auth/login')
        .send({user_name: 'jamster1', password: 'password1'})
        .expect(401, {message: 'invalid username or password'});
    });
  });

  context('Good credentials', () => {
    it('locates a user with the right username but wrong password', () => {
      return request(app)
        .post('/api/auth/login')
        .send({user_name: 'jamster1', password: 'password1'})
        .expect(401, {message: 'invalid username or password'});
    });

    it('locates a user with the right username and right password', () => {
      return request(app)
        .post('/api/auth/login')
        .send({user_name: 'jamster1', password: 'password'})
        .expect(200);
    });

    it('Sends a JWT Token to the authorized client', () => {
      
      const expectedToken = jwt.sign({'user_id': 1,}, process.env.JWT_SECRET, {
        subject: 'jamster1',
        algorithm: 'HS256',
        expiresIn: process.env.JWT_EXPIRATION
      });

      const expiredToken = jwt.sign({'user_id': 1,}, process.env.JWT_SECRET, {
        subject: 'jamster1',
        algorithm: 'HS256',
        expiresIn: '-1s'
      });

      return request(app)
        .post('/api/auth/login')
        .send({user_name: 'jamster1', password: 'password'})
        .expect(200)
        .then( res => {
          expect(res.body).to.have.property('token');
        });

    });

    it('handles no token', () => {
      return request(app)
        .post('/api/auth/refresh')
        .set('token', 'bad')
        .send({user_name: 'jamster1', password: 'password'})
        .expect(401);
    });

    it('handles good token', () => {
      return request(app)
        .post('/api/auth/refresh')
        .set('Authorization', 'bearer test')
        .send({user_name: 'jamster1', password: 'password'})
        .expect(200);
    });  
  });
});

