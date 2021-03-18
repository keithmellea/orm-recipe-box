'use strict';
module.exports = (sequelize, DataTypes) => {
  const instruction = sequelize.define('instruction', {
    specification: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: true,
      }
    },
    listOrder: DataTypes.INTEGER,
    recipeId: DataTypes.INTEGER
  }, {});
  instruction.associate = function(models) {
    // associations can be defined here
    instruction.belongsTo(models.recipe, { foreignKey: 'recipeId' })
  };
  return instruction;
};