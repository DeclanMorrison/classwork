const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8080;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "SuperSecretPasswordHere",
  database: "seinfeld_db"
});

connection.connect();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.get("/cast", (req, res) => {
  connection.query(`SELECT * FROM actors`, function(err, res){
    
    let html = `<h1>Seinfeld Cast List</h1>
                <ul>`

    res.forEach(function(value, index){
      const li = `
      
      `
    });
  });
});

app.get("/coolness", (req, res) => {

});

app.get("/attitude-chart/:att", (req, res) => {

});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});