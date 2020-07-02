"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Aromas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Sweet: {
        type: Sequelize.STRING
      },
      FruitOrFloral: {
        type: Sequelize.STRING
      },
      Spicy: {
        type: Sequelize.STRING
      },
      Wood: {
        type: Sequelize.STRING
      },
      Grain: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async queryInterface => {
    await queryInterface.dropTable("Aromas");
  }
};
