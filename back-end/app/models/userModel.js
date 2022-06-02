const { Users } = require('../../database/models');
const { HashPassMethods } = require('../utils/HashPassMethods');

module.exports = {
  async getAll() {
    return Users.findAll({
      where: { role: 'seller' },
      raw: true,
      attributes: ['id', 'name'],
    });
  },

  async getOne(data) {
    const user = await Users.findOne({
      where: { email: data.email },
      raw: true,
    });

    if (!user) {
      return null;
    }

    return user;
  },

  async create(user) {
    const criptoPassword = HashPassMethods.encryptPass(user.password);

    const userCreated = await Users.create({
      ...user,
      role: 'customer',
      password: criptoPassword,
    });

    return userCreated;
  },

  async getById(id) {
    const user = await Users.findOne({
      where: { id },
      raw: true,
    });

    return user;
  },
};
