// Dependencies
// =============================================================
// grab the orm from the config
var orm = require("../config/orm.js");

var burger = {
	// getting all the burgers
	selectAll: function(cb) {
		orm.selectAll("burgers", function(response) {
            // response corresponds to result from orm.js
            cb(response);
		});
    },
    // adding a new burger
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(response) {
            cb(response);
        });
    },
    // changing a burger status to devoured
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(response) {
            cb(response);
        });
    }
};

// export database functions to the controller
module.exports = burger;