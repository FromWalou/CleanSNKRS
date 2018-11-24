'use strict';
module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define('Service', {
    libellé: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {});
  Service.associate = function(models) {
    models.User.hasMany(models.Order);
  };
  return Service;
};