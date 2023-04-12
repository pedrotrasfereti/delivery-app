const { Users } = require('../../database/models');
const { HashPassMethods } = require('../utils/HashPassMethods');

module.exports = {
  async resetPassword(data) {
    const findUser = await Users.findOne({
      where: { email: data.email },
      raw: true,
    });

    if(!findUser) return null;

    const resetPass = await Users.update({
      password: HashPassMethods.encryptPass(data.newPass),
    }, {
      where: {
        email: data.email,
      },
      raw: true,
    });

    return resetPass;
  }
}