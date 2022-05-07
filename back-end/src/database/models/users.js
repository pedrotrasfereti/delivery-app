const makeUsers = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    role: {
      allowNull: false,
      type: DataTypes.STRING
    },
  }, {
    timestamps: false,
    tableName: 'users',
  });

  Users.associate = (models) => {
    models.Users.hasMany(models.Sales, {
      foreignKey: 'userId', as: 'user'
    });
    models.Users.hasMany(
      models.Sales, {
      foreignKey: 'sellerId', as: 'seller'
    });
  };
  return Users;
}

module.exports = makeUsers;
