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
      price: DataTypes.DECIMAL
    },
    {
      sequelize,
      modelName: "Drink"
    }
  );

  Drink.associate = function(models) {
    Drink.belongsToMany(models.Taste, { through: models.DrinkTaste });
    Drink.belongsToMany(models.Aroma, { through: models.DrinkAroma });
  };
  return Drink;
};
