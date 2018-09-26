var express = require("express");
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var animals = [
  {
    animalType: "dog",
    pet: true,
    fierceness: 4
  }, {
    animalType: "cat",
    pet: true,
    fierceness: 10
  }, {
    animalType: "giraffe",
    pet: false,
    fierceness: 4
  }, {
    animalType: "zebra",
    pet: false,
    fierceness: 8
  }, {
    animalType: "lion",
    pet: false,
    fierceness: 10
  }
];

app.get("/:animal", function(req, res) {
  // Handlebars requires an object to be sent to the dog.handlebars file. Lucky for us, animals[0] is an object!

  // 1. Send the dog object from the animals array to the dog.handlebars file.
  const name = req.params.animal;
  const found = animals.find(function(element){
    return element.animalType === name;
  });
  res.render("dog", found);

});

app.get("/all-pets", function(req, res) {
  // Handlebars requires an object to be sent to the index.handlebars file.

  // 2. Send the animals to the index.handlebars file. Remember that animals is an array and not an object.
  const found = animals.find(function(element){
    return element.pet === true;
  });
  res.render("index", found);

});

app.get("/all-non-pets", function(req, res) {
  // Handlebars requires an object to be sent to the index.handlebars file.

  // 3. Send all the animals that are not pets to the index.handlebars file.
  res.render("index", animals);

});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
