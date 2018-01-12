// *********************************************************************************
// orm.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("./connection.js");

  // ORM (Concept of an Object Relational Mapper)
// =============================================================
var orm = {
    // select all burgers from the table
    selectAll: function(tableInput, callback){
        var queryString = 'SELECT * FROM ' + tableInput;

        connection.query(queryString, function(err, result){
          if (err) {
              throw err;
          }

            // callbacks are utilized to ensure that data is returned only once the query is done.
            callback(result);
        });
    }
}