// *********************************************************************************
// burgers_controller.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

var express = require("express");
var burger = require("../models/burger.js");
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/", function(req, res) {
    // burger.selectAll(function(data) {
      res.sendFile(path.join(__dirname, "../public/test.html"));
    // });
  });
}