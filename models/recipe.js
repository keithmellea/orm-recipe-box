'use strict';
module.exports = (sequelize, DataTypes) => {
  const recipe = sequelize.define('recipe', {
    title: DataTypes.STRING
  }, {});
  recipe.associate = function(models) {
    // associations can be defined here
  };
  return recipe;
};