'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      price: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      urlImg: {
        allowNull: false,
        type: Sequelize.STRING
      }
    }, { timestamps: false });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Products');
  }
};
