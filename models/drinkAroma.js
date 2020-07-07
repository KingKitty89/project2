"use strict";
const { Model } = require("sequelize");
module.exports = sequelize => {
  class DrinkAroma extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  DrinkAroma.init(
    {},
    {
      sequelize,
      modelName: "DrinkAroma"
    }
  );

  DrinkAroma.associate = function(models) {
    DrinkAroma.belongsTo(models.Drink);
    DrinkAroma.hasMany(models.Aroma);
  };
  return DrinkAroma;
};
