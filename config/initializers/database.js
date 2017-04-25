var mysql = require('mysql');
var logger = require('winston');
var config = require('nconf');


var connection = mysql.createConnection({
	host:  config.get("DB_HOST"),
	user: config.get("DB_USER"),
	password: config.get("DB_PASSWORD"),
	database: config.get("DB_NAME")
});

module.exports = function(cb) {
  'use strict';
 
	logger.info("[DB] Initialization of MySql connection");
	connection.connect(function(err) {
  		if (err){
			logger.error("[DB] Initialization failed, cause " + err);
			return
  		}
  		logger.info("[DB] Connected with id " + connection.threadId);

	});
  cb();
};
