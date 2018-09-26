module.exports = function(sequelize, DataTypes) {
  const Todo = sequelize.define('Todo', {
    text: {
      type: DataTypes.STRING
    },
    isComplete: {
      type: DataTypes.BOOLEAN
    },
    isDeleted: {
      type: DataTypes.BOOLEAN
    }
  });
  return Todo;
};
