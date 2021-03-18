'use strict';
module.exports = (sequelize, DataTypes) => {
  const recipe = sequelize.define('recipe', {
    title: DataTypes.STRING
  }, {});
  recipe.associate = function(models) {
    recipe.hasMany(models.instrucion, {foreignKey: 'recipeId'});
  };
  return recipe;
};