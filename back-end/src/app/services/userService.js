const userModel = require('../models/userModel');
const { JwtMethods } = require('../utils/JwtMethods');

module.exports = {
  async create(user) {
    try {
      const createNewUser = await userModel.create(user);
      const { name, email, role } = createNewUser;
      const token = JwtMethods.jwtSign({ email, role });
      return { name, email, role, token };
    } catch (error) {
      const err = new Error('User already exist');
      err.name = 'conflict';
      throw err;
    }
  },
};
