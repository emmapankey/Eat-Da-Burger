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

  // GET route for getting all burgers
  router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
  });

  // POST route for creating a new burger
  router.post("/api/create", function(req, res) {
      burger.insertOne(["burger_name"], [req.body.burger_name], function(data) {
          res.json({
              id: data.insertId
          });
      });
  });

  // PUT route for updating a burger's status to devoured
  router.put("/api/update/:id", function(req, res) {
      var condition = "id = " + req.params.id;
      console.log(condition);

      burger.updateOne({
          devoured: req.body.devoured
      }, condition, function(data) {
        if (data.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
        });
      });

  // export to the server
  module.exports = router;