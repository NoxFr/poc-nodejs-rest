// /index.js
'use strict';

var server = require('./config/initializers/server');
var nconf = require('nconf');
var async = require('async');
var logger = require('winston');

// Load Environment variables from .env file
require('dotenv').load();

// Set up configs
nconf.use('memory')
  .argv()
  .env();

require('./config/environments/' + nconf.get('NODE_ENV'));

logger.info('[APP] Starting server initialization');
logger.info('[APP] Environnement : ' + nconf.get('NODE_ENV'));

// Initialize Modules
async.series([
  function startServer(callback) {
    server(callback);
  }
], function(err) {
  if (err) {
    logger.error('[APP] initialization failed', err);
  } else {
    logger.info('[APP] initialized succeed');
  }
});