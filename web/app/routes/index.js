var changeCase = require('change-case');
var express = require('express');
var routes = require('require-dir')();
var logger = require('winston');
var pkgInfo = require('../../package.json');

module.exports = function(app) {
  'use strict';

  // Initialize all routes
  Object.keys(routes).forEach(function(routeName) {
    var router = express.Router();
    // You can add some middleware here 
    // router.use(someMiddleware);

    // Initialize the route to add its functionality to router
    require('./' + routeName)(router);
    
    var url = '/'+ pkgInfo.name + '/' + changeCase.paramCase(routeName);

    logger.info("[ROUTES] REST service "+ routeName +"  exposed on  : " + url);
    
    // Add router to the speficied route name in the app
    app.use(url, router);
  });
};