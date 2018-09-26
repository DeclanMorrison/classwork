// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Book = require("../models/book.js");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;


// Routes
// =============================================================
module.exports = function(app) {

  // Add sequelize code to get all books and return them as JSON
  app.get("/api/all", function(req, res) {
    Book.all().then(books => {
      console.log(books);
    });
  });

  // Add sequelize code to get a specific book and return it as JSON
  app.get("/api/:book", function(req, res) {
    Book.all({
      where: {
        title: req.params.book
      }
    }).then(books => {
      console.log(books);
    });
  });

  // Add sequelize code to get all books of a specific genre and return them as JSON
  app.get("/api/genre/:genre", function(req, res) {
    Book.all({
      where: {
        genre: req.params.book
      }
    }).then(books => {
      console.log(books);
    });
  });

  // Add sequelize code to get all books from a specific author and return them as JSON
  app.get("/api/author/:author", function(req, res) {
    Book.all({
      where: {
        author: req.params.author
      }
    }).then(books => {
      console.log(books);
    });
  });

  // Add sequelize code to get all "long" books (more than 150 pages) and return them as JSON
  app.get("/api/books/long", function(req, res) {
    Book.all({
      where: {
        pageNumbers: { [Op.gt] : 150}
      }
    }).then(books => {
      console.log(books);
    });
  });

  // Add sequelize code to get all "short" books (150 pages or less) and return them as JSON
  app.get("/api/books/short", function(req, res) {
    Book.all( {
      where: {
        pageNumbers: { [Op.lt] : 150}
      }
    }).then(books => {
      console.log(books);
    });
  });

  // Add sequelize code to create a book
  app.post("/api/new", function(req, res) {
    Book.create({
      title: "Harry Potter and the Half Blood Prince",
      author: "J. K. Rowling",
      genre: "Young Adult",
      pageNumbers: "666"
    });
  });

  // Add sequelize code to delete a book
  app.post("/api/delete", function(req, res) {
    Book.all({
      where: {
        title: "Harry Potter and the Half Blood Prince"
      }
    }).then(books => {
      books.destroy();
    });
  });

};
