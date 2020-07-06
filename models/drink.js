"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Drink extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  Drink.init(
    {
      type: DataTypes.STRING,
      name: DataTypes.STRING,
      brand: DataTypes.STRING,
      taste: DataTypes.STRING,
      aroma: DataTypes.STRING,
      price: DataTypes.DECIMAL
    },
    {
      sequelize,
      modelName: "Drink"
    }
  );

  Drink.associate = function(models) {
    Drink.hasMany(models.Taste);
    Drink.hasMany(models.Aroma);
  };
  return Drink;
};
