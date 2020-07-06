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
      name: DataTypes.STRING,
      description: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: "Aroma"
    }
  );
  return Aroma;
};
