'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('salesProducts', {
      saleId: {
        allowNull: false,
        // foreignkey: true,
        type: Sequelize.INTEGER
      },
      productId: {
        allowNull: false,
        // foreignkey: true,
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.INTEGER
      },
    }, { timestamps: false });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('salesProducts');
  }
};
