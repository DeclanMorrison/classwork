module.exports = function(sequelize, DataTypes) {
  return POST = sequelize.define("post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validation: {
        min: 1,
        msg: "Title must be at least one character."
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validation: {
        min: 1,
        max: 160,
        msg: "Body must be between 1 and 160 characters long."
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Personal"
    }
  }, {
    paranoid: true
  });
};
