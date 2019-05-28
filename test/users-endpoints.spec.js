'use strict';
/* global request, expect*/

const knex = require('knex');
const helpers = require('./testHelpers');
const app = require('../src/app');
const bcrypt = require('bcrypt');

describe('Users endpoints working', () => {
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

  context('User registration', () => {
    it('Resolves no username being supplied', () => {
      return request(app)
        .post('/api/users/register')
        .send({password: 'user'})
        .expect(400, {message: 'invalid username or password'});
    });
    
    it('Resolves no password being supplied', () => {
      return request(app)
        .post('/api/users/register')
        .send({user_name: 'user'})
        .expect(400, {message: 'invalid username or password'});
    });
    
    it('Prevents invalid username', () => {
      return request(app)
        .post('/api/users/register')
        .send({user_name: 'user_!', password: 'password'})
        .expect(401, {message: 'username invalid'});
    });

    it('Prevents invalid password', () => {
      return request(app)
        .post('/api/users/register')
        .send({user_name: 'usernamw', password: 'password<fdf'})
        .expect(401, {message: 'password invalid'});
    });

    it('Prevents invalid nickname', () => {
      return request(app)
        .post('/api/users/register')
        .send({user_name: 'userperson', password: 'password', nickname: '>SDdd'})
        .expect(401, {message: 'nickname invalid'});
    });
  });

  context('The userbase has data', () => {
    before('Seed user data', () => {
      helpers.seedUsers(db);
    });

    const existingUser = helpers.makeUsers()[0];

    it('resolves user already existing', () => {
      return request(app)
        .post('/api/users/register')
        .send(existingUser)
        .expect(400, {message: 'username already exists'});
    });

    it('resolves a new user being created with nickname', () => {
      return request(app)
        .post('/api/users/register')
        .send({user_name: 'userperson', password: 'password', nickname: 'SDdd'})
        .expect(201)
        .then(newUser => {
          expect(newUser.body.user_name).to.eql('userperson');
          expect(newUser.body.nickname).to.eql('SDdd');
          expect(newUser.body).to.not.have.property('password');
          expect(newUser.body).to.not.have.property('id');
        });
    });

    it('resolves a new user being created without nickname', () => {
      return request(app)
        .post('/api/users/register')
        .send({user_name: 'userperson2', password: 'password'})
        .expect(201)
        .then(newUser => {
          expect(newUser.body.user_name).to.eql('userperson2');
          expect(newUser.body).to.not.have.property('nickname');
          expect(newUser.body).to.not.have.property('password');
          expect(newUser.body).to.not.have.property('id');
        });
    });
  });
});
  