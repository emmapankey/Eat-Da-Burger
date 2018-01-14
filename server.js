// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.

// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Static directory
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST
app.use(methodOverride('_method'));

// Set Handlebars as the view engine
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Routes
// =============================================================
var routes = require("./controllers/burgers_controllers.js")

app.use("/", routes);

// Starting our Express app
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
