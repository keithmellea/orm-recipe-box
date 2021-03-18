'use strict';
module.exports = (sequelize, DataTypes) => {
  const ingredient = sequelize.define('ingredient', {
    amount: DataTypes.DECIMAL,
    measurementUnitId: DataTypes.INTEGER,
    foodStuff:{
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    recipeId: DataTypes.INTEGER
  }, {});
  ingredient.associate = function(models) {
    // associations can be defined here
    ingredient.belongsTo(models.recipe, {foreignKey: 'recipeId'});
    ingredient.belongsTo(models.MeasurementUnit, {foreignKey: 'measurementUnitId'});
  };
  return ingredient;
};