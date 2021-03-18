'use strict';
module.exports = (sequelize, DataTypes) => {
  const MeasurementUnit = sequelize.define('MeasurementUnit', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
  }, {});
  MeasurementUnit.associate = function(models) {
    // associations can be defined here
    MeasurementUnit.hasMany(models.ingredient, { foreignKey: 'measurementUnitId'});
  };
  return MeasurementUnit;
};