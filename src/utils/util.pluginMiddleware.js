require('dotenv/config');
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const compression = require('compression');
const logger = require('morgan');

module.exports = (app) => {
  app.use(cors());
  app.use(helmet());
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(compression({ level: 9, strategy: 4 }));

  if (process.env.NODE_ENV === 'development') {
    app.use(logger('dev'));
  }
};
