const express = require("express");
const mysql = require("mysql");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const PORT = process.env.PORT || 8080;

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "SuperSecretPasswordHere",
  database: "moviePlannerDB"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

//Here, there be code.

app.get("/", (req, res) => {
  connection.query("SELECT * FROM movies", (err, data) => {
    if(err) throw err;

    res.render("index", {movies: data});
  });
});

app.delete("/movies/:id", (req, res) => {
  connection.query("DELETE FROM movies WHERE id = ?", [req.params.id], (err, data) => {
    if(err){
      return res.status(500).end();
    }else if (data.affectedRows === 0) {
      return res.status(404).end();
    };
    res.status(200).end();
  });
});

app.post("/movies", (req, res) => {
  
});

app.listen(PORT, () => {
  console.log(`App listening on 192.168.15.10:${PORT}`);
});