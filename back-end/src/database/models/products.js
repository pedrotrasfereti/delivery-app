import { DataTypes } from 'sequelize';

const makeProducts = (sequelize) => {
  const model = sequelize.define('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      price: {
        allowNull: false,
        type: DataTypes.FLOAT
      },
      urlImg: {
        allowNull: false,
        type: DataTypes.STRING
      }   
    });

    return model;
}

export default makeProducts;
