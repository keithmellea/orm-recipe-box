'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ingredients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      amount: {
        allowNull: false,
        type: Sequelize.DECIMAL(5, 2)
      },
      measurementUnitId: {
        allowNull: false,
        references: { model: 'MeasurementUnits' },
        type: Sequelize.INTEGER
      },
      foodStuff: {
        allowNull: false,
        type: Sequelize.STRING(500)
      },
      recipeId: {
        allowNull: false,
        references: { model: 'recipes' },
        type: Sequelize.INTEGER
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ingredients');
  }
};