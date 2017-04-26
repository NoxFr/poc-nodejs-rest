var mysql = require('mysql'),
    myConnection = require('express-myconnection');
var logger = require('winston');
var nconf = require('nconf');

// Set up configs
nconf.use('memory')
	 .argv()	
	 .env();

var dbOptions = {
	host:  nconf.get("DB_HOST"),
	user: nconf.get("DB_USER"),
	password: nconf.get("DB_PASSWORD"),
	database: nconf.get("DB_NAME")
};


module.exports = {
	testConnection : function(cb) {
		 mysql.createConnection(dbOptions).connect( function(err) {
	  		if (err){
				logger.error("[DB] Initialization failed, cause " + err);
	  		}  else {
	  			logger.info("[DB] Initialization success");
	  		}
	  		

	   	})
		cb();	
    },

	getMyConnectionMiddleWare : function (){
		return myConnection(mysql, dbOptions, "single");
	}
};
