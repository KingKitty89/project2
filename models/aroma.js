"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Aroma extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
  Aroma.associate = function(models) {
    Aroma.belongsTo(models.Drink);
  }
  return Aroma;
};
