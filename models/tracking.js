'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tracking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tracking.belongsTo(models.User); // Uma tracking pertence a um usuario
      Tracking.hasMany(models.Product) // uma tracking tem muitos produtos
    }
  }
  Tracking.init({
    code: DataTypes.STRING,
    local: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tracking',
  });
  return Tracking;
};