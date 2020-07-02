"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Aroma extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
      // models
    }
  }
  Aroma.init(
    {
      Sweet: DataTypes.STRING,
      FruitOrFloral: DataTypes.STRING,
      Spicy: DataTypes.STRING,
      Wood: DataTypes.STRING,
      Grain: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Aroma"
    }
  );
  return Aroma;
};
