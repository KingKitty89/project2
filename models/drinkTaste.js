"use strict";
const { Model } = require("sequelize");
module.exports = sequelize => {
  class DrinkTaste extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  DrinkTaste.init(
    {},
    {
      sequelize,
      modelName: "DrinkTaste"
    }
  );

  DrinkTaste.associate = function(models) {
    DrinkTaste.belongsTo(models.Drink);
    DrinkTaste.hasMany(models.Taste);
  };
  return DrinkTaste;
};
