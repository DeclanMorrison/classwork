// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// grab the orm from the config
// (remember: connection.js -> orm.js -> route file)
const Sequelize = require("sequelize");
const sequelize = require("../models");
const Op = Sequelize.Op;

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/todos", function(req, res) {
    sequelize.Todo.all({
      where: {
        isDeleted:{[Op.ne]:true}
      }
    }).then(todos => {
      res.json(todos);
    });
  });

  // POST route for saving a new todo. We can create a todo using the data on req.body
  app.post("/api/todos", function(req, res) {
    sequelize.Todo.create({
      text: req.body.text,
      isComplete: req.body.complete,
      isDeleted: 0
    });
  });

  // DELETE route for deleting todos. We can access the ID of the todo to delete in
  // req.params.id
  app.put("/api/todos/:id", function(req, res) {
    const id = req.params.id;
    console.log(id);
    sequelize.Todo.all({
      where: {id:id}
    }).then(data => {
      
      console.log(data[0].dataValues.isComplete);
      
      if (data[0].dataValues.isComplete === true) {
        sequelize.Todo.update({isComplete:false},{where:{id:id}})
        .then(data => {
          res.json(data);
        });
      }else if (data[0].dataValues.isComplete === false) {
        sequelize.Todo.update({isComplete:true},{where:{id:id}})
        .then(data => {
          res.json(data);
        });
      };
    });
  });

  // PUT route for updating todos. We can access the updated todo in req.body
  app.delete("/api/todos/:id", function(req, res) {
    const id = req.params.id;
    console.log(id);
    sequelize.Todo.update(
      {isDeleted: true},
      {where:{id:id}}
    )
    .then(data => {
      res.json(data);
    });
  });
};
