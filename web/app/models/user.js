// app/models/user.js
"use strict";


module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("User", {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		login: {
			type: DataTypes.STRING
		},
		nom: {
			type: DataTypes.STRING
		},
		prenom: {
			type: DataTypes.STRING
		}
	}, {
		timestamps: false,
		tableName: 't_users'
	});

	// Create tables if not exists
	sequelize.sync({force : true});

	return User;
};