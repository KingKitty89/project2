"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Taste extends Model {
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
  Taste.init(
    {
      Sweet: DataTypes.STRING,
      FruitOrFloral: DataTypes.STRING,
      Spicy: DataTypes.STRING,
      Grain: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Taste"
    }
  );
  return Taste;
};
