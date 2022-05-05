const userModel = require('../models/userModel');
const { JwtMethods } = require('../utils/JwtMethods');

module.exports = {
  async create(user) {
    const { id, name, email, role } = await userModel.create(user);
    const token = JwtMethods.jwtSign({ id, email, role });
    return { id, name, email, role, token };
  },
};
