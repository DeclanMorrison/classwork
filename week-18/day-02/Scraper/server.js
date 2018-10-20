// Using the tools and techniques you learned so far,
// you will scrape a website of your choice, then place the data
// in a MongoDB database. Be sure to make the database and collection
// before running this exercise.

// Consult the assignment files from earlier in class
// if you need a refresher on Cheerio.

// Dependencies
var express = require("express");
var mongojs = require("mongojs");
// Require axios and cheerio. This makes the scraping possible
var axios = require("axios");
var cheerio = require("cheerio");

// Initialize Express
var app = express();

app.use(express.static("public"));

// Database configuration
var databaseUrl = "root:root@192.168.99.100/scraper?authSource=admin";
var collections = ["scrapedData"];

// Hook mongojs configuration to the db variable
var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});

// Main route (simple Hello World Message)
app.get("/", function(req, res) {
  res.send("Hello world");
});

// TODO: make two more routes

// Route 1
// =======
app.get("/all", function(req, res) {
  db.posts.find({}).limit(20, function(error, found) {
    if(error) throw error;
    res.json(found);
  });
});

// Route 2
// =======
app.get("/scrape", function(req, res) {
  axios.get("https://old.reddit.com/r/fakehistoryporn/").then(response => {
    // Load the HTML into cheerio and save it to a variable
    // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
    var $ = cheerio.load(response.data);

    // An empty array to save the data that we'll scrape
    var results = [];

    // Select each element in the HTML body from which you want information.
    // NOTE: Cheerio selectors function similarly to jQuery's selectors,
    // but be sure to visit the package's npm page to see how it works
    $("a.title", "#siteTable").each(function(i, element) {

      var link = $(element).attr("href");
      var title = $(element).text();

      // Save these results in an object that we'll push into the results array we defined earlier
      results.push({
        title: title,
        link: link
      });
    });

    // Log the results once you've looped through each of the elements found with cheerio
    results.forEach((value, index) => {
      db.posts.insert({title : value.title, link : value.link});
    });
  });
})

/* -/-/-/-/-/-/-/-/-/-/-/-/- */

// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
