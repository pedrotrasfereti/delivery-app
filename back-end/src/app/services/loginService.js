const loginModel = require('../models/loginModel');
const { jwtSign } = require('../utils/JwtMethods');

module.exports = {
  async login(data) {
    const email = await loginModel.login(data);
    const token = jwtSign({ email });
    return token;
  },

};
