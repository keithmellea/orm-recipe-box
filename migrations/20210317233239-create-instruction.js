'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("instructions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      specification: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      listOrder: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      recipeId: {
        allowNull: false,
        references: { model: "recipes" },
        type: Sequelize.INTEGER,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('instructions');
  }
};