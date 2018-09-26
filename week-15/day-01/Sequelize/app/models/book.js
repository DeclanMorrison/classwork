// Dependencies
// =============================================================

// Require the sequelize library
const Sequelize = require("sequelize");
// Require the connection to the database (connection.js)
const connection = require("../config/connection.js");
// Create a "Book" model with the following configuration

const Book = connection.define("book", {
  title: {
    type: Sequelize.STRING
  },
  author: {
    type: Sequelize.STRING
  },
  genre: {
    type: Sequelize.STRING
  },
  pageNumbers: {
    type: Sequelize.INTEGER
  }
});

Book.sync();

module.exports = Book;

// 1. A title property of type STRING
// 2. An author property of type STRING
// 3. A genre property of type STRING
// 4. A pages property of type INTEGER

// Sync model with DB

// Export the book model for other files to use
