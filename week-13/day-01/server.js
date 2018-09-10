// Require/import the HTTP module
const http = require("http");

// Define a port to listen for incoming requests
const portGood = 7000;
const portBad = 7500;

// Create a generic function to handle requests and responses
function handleRequestGood(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("This is a good thing about you. You should feel good about yourself.");
}

function handleRequestBad(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("This is a bad thing about you. You should feel bad about yourself.");
}
// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
const goodServer = http.createServer(handleRequestGood);
const badServer = http.createServer(handleRequestBad);

// Start our server so that it can begin listening to client requests.

goodServer.listen(portGood, () => {
  console.log("Server listening on: http://localhost:" + portGood);
});

badServer.listen(portBad, () => {
  console.log("Server listening on: http://localhost:" + portBad);
});