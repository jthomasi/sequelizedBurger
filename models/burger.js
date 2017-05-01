// var orm = require("../config/orm.js");

// var burger = {

// 	selectAll: function(cb) {
// 		orm.selectAll("burgers", function(res) {
// 			console.log("Model");
// 			cb(res);
// 		});
// 	},
// 	insertOne: function(cols, vals, cb) {
// 		orm.insertOne("burgers", cols, vals, function(res){
// 			console.log("Model");
// 			cb(res);
// 		});
// 	},
// 	updateOne: function(colVals, condition, cb) {
// 		orm.updateOne("burgers", colVals, condition, function(res) {
// 			console.log("Model");
// 			cb(res);
// 		});
// 	}

// };

// module.exports = burger;

// OLD ^^^^^^^^

module.exports = function(sequelize, dataTypes){
	var Burger = sequelize.define("Burger", {
		burger_name : {
			type: DataTypes.STRING,
			allowNull: false,
		    validate: {
		    	len: [255]
		    }
		},
		devoured : {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			validate: {
				len: [1]
			}
		}
	});
	return Burger;
};