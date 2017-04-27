"use strict";

var fs        = require("fs");
var path      = require("path");
var Sequelize = require('sequelize');
var logger = require('winston');
var nconf = require('nconf');

// Set up configs
nconf.use('memory')
	.argv()
	.env();


var sequelize = new Sequelize(nconf.get("DB_NAME"), nconf.get("DB_USER"), nconf.get("DB_PASSWORD"), {
  host: nconf.get("DB_HOST"),
  dialect: 'mysql',
});


var db        = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;