'use strict';
const { expect } = require('chai');
const request = require('supertest');

//npm t -- --watch  :keeps tests running
global.expect = expect;
global.request = request;