const { Users } = require('../../database/models');
const { encryptPass } = require('../utils/HashPassMethods');

module.exports = {
  async create(user) {
    const criptoPassword = encryptPass(user.password);
  
    const userCreated = await Users.create({
      ...user,
      password: criptoPassword, 
    });
    
    return userCreated;
  },

  async getAll() {
    const users = await Users.findAll({ raw: true });
    return users;
  },
};
