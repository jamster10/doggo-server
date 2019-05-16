'use strict';

require('dotenv').config();
const app = require('express')();
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const { errorHandler } = require('./util/errorHandling');
const { cors_Settings } = require('./util/CORS_settings');
const { morgan_Settings } = require('./util/Logging-Winston_Morgan');

const authenticationRouter = require('../src/Routes/authentication/auth-router');
const usersRouter = require('../src/Routes/authentication/user-router');

// const  validateToken  = require('./util/validateToken');

app.use(cors(cors_Settings));
app.use(helmet());
app.use(validateToken);
app.use(morgan(morgan_Settings));

app.use('/api/auth', authenticationRouter);
app.use('/users', usersRouter);





app.use('*', (req, res, next) => {
  res.status(404).json({message: 'Resource not Found'});
});

app.use(errorHandler);

module.exports = app;
