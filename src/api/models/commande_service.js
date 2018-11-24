'use strict';
module.exports = (sequelize, DataTypes) => {
  const Commande_Service = sequelize.define('Commande_Service', {
    idCOM: DataTypes.INTEGER,
    idSERV: DataTypes.INTEGER
  }, {});
  Commande_Service.associate = function(models) {
    models.Commande_Service.belongsTo(models.Service, {
    	foreignKey: {
    		allowNull: false
    	}
    })
    models.Commande_Service.belongsTo(models.Order, {
    	foreignKey: {
    		allowNull: false
    	}
    })
  };
  return Commande_Service;
};