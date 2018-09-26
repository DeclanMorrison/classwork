const express = require("express");
const handlebars = require("express-handlebars");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const app = express();

const PORT = process.env.PORT || 8080;

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "SuperSecretPasswordHere",
  database: "wishes_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  };

  console.log("connected as id " + connection.threadId);
});

app.get("/", (req, res) => {
  connection.query(`SELECT *
                    FROM wishes;`,
                    (err, data) =>{
  if (err) throw err;

  console.log(data);

  res.render("index", {wishes: data});
  });
});

app.post("/", (req, res) => {
  connection.query(`INSERT INTO wishes (wish) VALUES (?)`, [req.body.wish], (err, data) => {
    if (err) throw err;

    res.redirect("/");
  });
});

app.listen(PORT, () => {
  console.log(`Listening on 192.168.15.10:${PORT}`);
});