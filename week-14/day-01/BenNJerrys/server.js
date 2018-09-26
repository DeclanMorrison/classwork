// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");

// Create an instance of the express app.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const icecreams = [
     {name: 'vanilla', price: 10, awesomeness: 3},
     {name: 'chocolate', price: 4, awesomeness: 8},
     {name: 'banana', price: 1, awesomeness: 1},
     {name: 'greentea', price: 5, awesomeness: 7},
     {name: 'jawbreakers', price: 6, awesomeness: 2},
   ];

app.get("/icecream/:name", (req, res) => {
  const name = req.params.name;
  const found = icecreams.find(function(element){
    return element.name === name;
  });
  console.log(found);
  res.render("index", found);
});

app.get("/icecreams", (req, res) => {
  res.render("all", icecreams);
});

app.listen(PORT, function(){
  console.log("Server connected on" + PORT);
});