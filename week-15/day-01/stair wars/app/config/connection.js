// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

const Sequelize = require("sequelize");
const sequelize = new Sequelize("starwars", "root", "SuperSecretPasswordHere", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: false
});

// Exporting our connection
module.exports = sequelize;
