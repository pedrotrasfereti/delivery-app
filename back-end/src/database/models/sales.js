import { DataTypes } from 'sequelize';

const makeSales = (sequelize) => {
  const Sales = sequelize.define('Sales', {
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

    Sales.associate((model) => {
      Sales.belongsTo(model.Users,
        { 
          foreignKey: 'id',
          as: 'user',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        }
      )
    })

    Sales.associate((model) => {
      Sales.belongsTo(model.Users,
        {
          foreignKey: 'id',
          as: 'seller',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        }
      )
    })

    return Sales;
}

export default makeSales;
