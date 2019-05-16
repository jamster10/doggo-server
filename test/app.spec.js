'use strict';
/* global request */

const app = require('../src/app');

describe('GET /', () => {
  it('Responds to non-existent resource', () => {
    return request(app)
      .get('/')
      .expect(404, 'Resource not Found');
  });

  it('Responds to non-existent resource', () => {
    return request(app)
      .get('/guest')
      .expect(404, 'Resource not Found');
  });

});
