const userModel = require('../models/userModel');

module.exports = {
  async create(user) {
    const userCreated = await userModel.create(user);
    return userCreated;
  },

    async getAll() {
    const users = await userModel.getAll();
    return users;
  },
};
