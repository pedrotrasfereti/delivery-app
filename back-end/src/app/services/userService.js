const userModel = require('../models/userModel');
const { JwtMethods } = require('../utils/JwtMethods');

module.exports = {
  async create(user) {
    const { name, email, role } = await userModel.create(user);
    const token = JwtMethods.jwtSign({ email, role });
    return { name, email, role, token };
  },
};
