import { DataTypes } from 'sequelize';

const makeSales = (sequelize) => {
  const model = sequelize.define('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      userId: {
        type: DataTypes.INTEGER
      },
      sellerId: {
        type: DataTypes.INTEGER
      },
      totalPrice: {
        allowNull: false,
        type: DataTypes.FLOAT
      },
      deliveryAddress: {
        allowNull: false,
        type: DataTypes.STRING
      },
      deliveryNumber: {
        allowNull: false,
        type: DataTypes.STRING
      },
      saleDate: {
        allowNull: false,
        type: DataTypes.DATE
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING
      },
    });

    return model;
}

export default makeSales;
