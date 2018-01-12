// Dependencies
// =============================================================
// grab the orm from the config
var orm = require("../config/orm.js");

var burger = {
	// getting all the burgers
	selectAll: function(callback) {
		orm.selectAll("burgers", function(response) {
			callback(response);
		});
    }
}