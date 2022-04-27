import { DataTypes } from 'sequelize';

const makeSalesProducts = (sequelize) => {
  const model = sequelize.define('salesProducts', {
      saleId: {
        allowNull: false,
        // foreignkey: true,
        type: DataTypes.INTEGER
      },
      productId: {
        allowNull: false,
        // foreignkey: true,
        type: DataTypes.INTEGER
      },
      quantity: {
        type: DataTypes.INTEGER
      },
    });

    return model;
}

export default makeSalesProducts;
