// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the sequelize
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
const Sequelize = require("sequelize");
var sequelize = require("../models");
const Op = Sequelize.Op;

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/posts", function(req, res) {
    sequelize.post.all({where:{deletedAt:null}}).then(data => {
      res.json(data);
    });
  });

  // Get route for returning posts of a specific category
  app.get("/api/posts/category/:category", function(req, res) {
    // Add sequelize code to find all posts where the category is equal to req.params.category,
    // return the result to the user with res.json
    sequelize.post.all({where:{category:req.params.category,deletedAt:null}}).then(data => {
      res.json(data);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/posts/:id", function(req, res) {
    // Add sequelize code to find a single post where the id is equal to req.params.id,
    // return the result to the user with res.json
    sequelize.post.all({where:{id:req.params.id,deletedAt:null}}).then(data => {
      res.json(data);
    });
  });

  // post route for saving a new post
  app.post("/api/posts", function(req, res) {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json
    sequelize.post.create({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category,
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {
    // Add sequelize code to delete a post where the id is equal to req.params.id, 
    // then return the result to the user using res.json
    sequelize.post.destroy({where:{id:req.params.id}}).then(data => {
      res.json(data);
    });
  });

  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    // Add code here to update a post using the values in req.body, where the id is equal to
    // req.body.id and return the result to the user using res.json
    sequelize.post.update({body:req.body.body},{where:{id:req.body.id}}).then(data => {
      res.json(data);
    });
  });
};
