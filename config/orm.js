// *********************************************************************************
// orm.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("./connection.js");

// Functions to aid in sql query construction
// =============================================================
function printQuestionMarks(num){
    var arr = [];
  
    for (var i=0; i<num; i++){
      arr.push("?")
    };
  
    return arr.toString();
  };
  
  function objToSql(ob){
    var arr = [];
  
    for (var key in ob) {
      arr.push(key + "=" + ob[key]);
    };
  
    return arr.toString();
  };

  // ORM (Concept of an Object Relational Mapper)
// =============================================================
var orm = {
    // select all burgers from the table
    // callback on line 14 is populated with the result value
    selectAll: function(tableInput, callback){
        var queryString = "SELECT * FROM " + tableInput;

        connection.query(queryString, function(err, result){
          if (err) {
              throw err;
          }
            // callbacks are utilized to ensure that data is returned only once the query is done.
            callback(result);
        });
    }
}

// export orm for use in the model
module.exports = orm;