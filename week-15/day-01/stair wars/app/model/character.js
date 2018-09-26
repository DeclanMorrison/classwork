const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");

const Character = sequelize.define("character", {
  routeName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  role: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER(11),
    allowNull: false
  },
  forcePoints: {
    type: Sequelize.INTEGER(11),
    allowNull: false
  },
});

Character.create({
  routeName: "/api/yoda",
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 9001
});

Character.sync();

module.exports = Character;