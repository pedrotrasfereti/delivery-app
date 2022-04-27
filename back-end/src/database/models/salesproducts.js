import { DataTypes } from 'sequelize';

const makeSalesProducts = (sequelize) => {
  const SalesProducts = sequelize.define('SalesProducts', {
      quantity: {
        type: DataTypes.INTEGER,
        allowNull:false
      },
    });

    SalesProducts.associate((model) => {
      model.Sales.belongsToMany(
        model.Products, {
          as: 'products',
          through: SalesProducts,
          foreignKey: 'salesId',
          otherKey: 'productsId',
        }
      );
    })

    SalesProducts.associate((model) => {
      model.Products.belongsToMany(
        model.Sales, {
          as: 'sales',
          through: SalesProducts,
          foreignKey: 'productsId',
          otherKey: 'salesId',
        }
      );
    })

    return SalesProducts;
}

export default makeSalesProducts;
