'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('salesProducts', {
      sale_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: { model: 'sales', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: { model: 'products', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
