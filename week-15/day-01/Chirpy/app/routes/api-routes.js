// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps


  // Add a chirp
  app.post("/api/submit", (req, res) => {
    console.log(req.body.userName, req.body.chirp);
  });


};
