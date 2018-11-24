'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    stylecode: DataTypes.STRING,
    color: DataTypes.STRING,
    state: DataTypes.STRING,
    rate: DataTypes.INTEGER,
    service: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});
  Order.associate = function(models) {
    // associations can be defined here

    models.Order.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    }) 
  };
  return Order;
};