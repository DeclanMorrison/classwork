// Dependencies
var express = require("express");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Create express app instance.
var app = express();

// Routes
// What routes do you need to have? Which ones are optional?
// TODO Add your routes here
app.get("/:operation/:firstNumber/:secondNumber/:optional", function(req, res) {

  // TODO parse out the variables from the request
  // Parameters are received from the URL
  const operation = req.params.operation;
  const firstNumber = req.params.firstNumber;
  const secondNumber = req.params.secondNumber;
  const optional = req.params.optional;
  // TODO make sure they're converted to integers (and not strings)
  // Parameters are converted to integers

  const parsedFirst = parseInt(firstNumber, 10);
  const parsedSecond = parseInt(secondNumber, 10);

  // Initialize the result variable to send later
  var result;
  // Switch statement chooses operation based on the operation parameter.
  
  const logic = {
    "+":(x, y) => x + y,
    "-":(x, y) => x - y,
    "*":(x, y) => x * y,
    "div":(x, y) => x / y
  };

  result = logic[operation](parsedFirst, parsedSecond);

  // We return the result back to the user in the form of a string
  res.send(result.toString());

});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
