'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      sellerId: {
        type: Sequelize.INTEGER
      },
      totalPrice: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      deliveryAddress: {
        allowNull: false,
        type: Sequelize.STRING
      },
      deliveryNumber: {
        allowNull: false,
        type: Sequelize.STRING
      },
      saleDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING
      },
    }, { timestamps: false });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('sales');
  }
};
