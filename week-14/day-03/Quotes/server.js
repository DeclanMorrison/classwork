var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "SuperSecretPasswordHere",
  database: "quotes_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

connection.query("SELECT * FROM quotes WHERE isDeleted = 0", (err, data) => {
  if (err) throw err;

  app.get("/", (req, res) => {
    res.render("index", {quotes: data});
  });
});

app.delete("/:id", (req, res) => {
  const id = req.params.id;
  connection.query("UPDATE quotes SET isDeleted = 1 WHERE id = ?", [id], (err, data) => {
    if(err) throw err;
  });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
