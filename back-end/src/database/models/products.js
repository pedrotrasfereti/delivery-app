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
      type: DataTypes.DECIMAL(10, 2)
    },
    urlImage: {
      allowNull: false,
      type: DataTypes.STRING,
    }   
  }, {
    timestamps: false,
    tableName: 'products',
    underscored: true,
  });

  return Products;
};

module.exports = makeProducts;
