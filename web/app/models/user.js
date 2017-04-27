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
		}
	}, {
		timestamps: false,
		tableName: 't_users'
	});

	return User;
};