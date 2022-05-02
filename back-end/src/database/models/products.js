const makeProducts = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
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
  }, {
    timestamps: false,
  });

  return Products;
};

module.exports = makeProducts;
