const { Users } = require('../../database/models');
const { HashPassMethods } = require('../utils/HashPassMethods');

module.exports = {
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

  async getAll() {
    const users = await Users.findAll({ raw: true });
    return users;
  },
};
