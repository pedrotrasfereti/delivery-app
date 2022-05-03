const { Users } = require('../../database/models');
const { encryptPass, comparePass } = require('../utils/HashPassMethods');

module.exports = {
  async login(data) {
    const cryptoPassword = encryptPass(data.password);
    const user = await Users.findOne({
      where: { email: data.email },
      raw: true,
    });

    const compare = comparePass(cryptoPassword, user.password);

    if (!compare) {
      const err = new Error('password incorret');
      err.name = 'unauthorized';

      throw err;
    }
    
    return user.email;
  },

};
