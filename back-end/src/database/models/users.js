import { DataTypes } from 'sequelize';

const makeUsers = (sequelize) => {
  const Users = sequelize.define('Users', {
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
      email: {
        allowNull: false,
        type: DataTypes.STRING
      },
      password:{
        allowNull: false,
        type: DataTypes.STRING
      },
      role: {
        allowNull: false,
        type: DataTypes.STRING
      },
    });

    Users.associate((model) => {
      Users.hasMany(model.Sales, { foreignKey: 'userId', as: 'user' })
    })

    Users.associate((model) => {
      Users.hasMany(model.Sales, { foreignKey: 'sellerId', as: 'seller' })
    })

    return Users;
}

export default makeUsers;
