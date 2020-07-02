"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Bourbon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      //models
      // define association here
    }
  }
  Bourbon.init(
    {
      name: DataTypes.STRING,
      brand: DataTypes.STRING,
      taste: DataTypes.STRING,
      aroma: DataTypes.STRING,
      price: DataTypes.DECIMAL
    },
    {
      sequelize,
      modelName: "Bourbon"
    }
  );
  return Bourbon;
};
