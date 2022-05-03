const { Users } = require('../../database/models');
const { HashPassMethods } = require('../utils/HashPassMethods');

module.exports = {
  async login(data) {
    const cryptoPassword = HashPassMethods.encryptPass(data.password);
    const user = await Users.findOne({
      where: { email: data.email },
      raw: true,
    });

    const compare = HashPassMethods.comparePass(cryptoPassword, user.password);

    if (!compare) {
      const err = new Error('password incorret');
      err.name = 'unauthorized';

      throw err;
    }

    const { email, role, name, } = user;
    
    return {
      email,
      role,
      name,
    };
  },

};
