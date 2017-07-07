// var orm = require("../config/orm.js");

// var burger = {

// 	all: function(cb){
// 		orm.all("burgers", function(res){
// 			cb(res);
// 		});
// 	},

// 	add: function(cols, vals, cb){
// 		orm.add("burgers", cols, vals, function(res){
// 			cb(res);
// 		});
// 	},

// 	update: function(objColVals, condition, cb){
// 		orm.update("burgers", objColVals, condition, function(res){
// 			cb(res);
// 		});
// 	},

// };


// module.exports = burger;

"use strict";

module.exports = function(sequelize, DataTypes) {
  var food = sequelize.define("burgers", {
    name: {type: DataTypes.STRING},
    devoured: {type: DataTypes.BOOLEAN, defaultValue: false},
    date: {type: DataTypes.DATE, defaultValue: DataTypes.NOW}
  }, {

  	timestamps: false,

  	underscored: true,

  	freezeTableName: true,

  	tableName: 'burgers',

  });

  return food;
};