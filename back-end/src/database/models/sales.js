const makeSales = (sequelize, DataTypes) => {
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
      type: DataTypes.DECIMAL(10, 2),
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
  }, {
    timestamps: false,
    tableName: 'sales',
    underscored: true,
  });

  Sales.associate = (models) => {
    models.Sales.belongsTo(models.Users, {
      as: 'user',
      foreignKey: 'userId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    models.Sales.belongsTo(models.Users, {
      as: 'seller',
      foreignKey: 'sellerId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  };

  return Sales;
};

module.exports = makeSales;
