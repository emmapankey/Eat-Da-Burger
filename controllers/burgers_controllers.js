// *********************************************************************************
// burgers_controller.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

var express = require("express");
// import burger model for access to data
var burger = require("../models/burger.js");
// express router within the app instance
var router = express.Router();

// Routes
// =============================================================

  // GET route for getting all of the todos
  router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        // console.log(hbsObject);
        res.render("index", hbsObject);
    });
  });

  // export to the server
  module.exports = router;