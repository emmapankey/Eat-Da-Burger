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
    }
}

// export database functions to the controller
module.exports = burger;