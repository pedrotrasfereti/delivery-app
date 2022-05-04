const { JwtMethods } = require('../utils/JwtMethods');
const { HashPassMethods } = require('../utils/HashPassMethods');
const userModel = require('../models/userModel');

module.exports = {
  async login(data) {
    try {
      const user = await userModel.getOne(data);
      if (!user) throw Error;
      const { name, email, role, password } = user;
      const cryptoPassword = HashPassMethods.encryptPass(data.password);
      const compare = HashPassMethods.comparePass(cryptoPassword, password);
      if (!compare) throw Error;
      const token = JwtMethods.jwtSign({ email, role });
      return { name, email, role, token };
    } catch (error) {
      const err = new Error('Invalid email or password');
      err.name = 'unauthorized';
      throw err;
    }
  },

};
