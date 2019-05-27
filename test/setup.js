'use strict';
const { expect } = require('chai');
const request = require('supertest');
require('dotenv').config();

//npm t -- --watch  :keeps tests running
global.expect = expect;
global.request = request;