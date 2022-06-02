const userModel = require('../models/userModel');
const { JwtMethods } = require('../utils/JwtMethods');

module.exports = {
  async getAll() {
    return userModel.getAll();
  },
  async create(user) {
    try {
      const { id, name, email, role } = await userModel.create(user);
      const token = JwtMethods.jwtSign({ id, email, role });
      return { id, name, email, role, token };
    } catch (error) {
      const err = new Error('User already exist');
      err.name = 'conflict';
      throw err;
    }
  },
};
