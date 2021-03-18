'use strict';
module.exports = (sequelize, DataTypes) => {
  const recipe = sequelize.define('recipe', {
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
  }, {});
  recipe.associate = function(models) {
      recipe.hasMany(models.instruction, {
        foreignKey: "recipeId",
        onDelete: "CASCADE",
        hooks: true,
      });
      recipe.hasMany(models.ingredient, {
        foreignKey: "recipeId",
        onDelete: "CASCADE",
        hooks: true,
      });
  };
  return recipe;
};