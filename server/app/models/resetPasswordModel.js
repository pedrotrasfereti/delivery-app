const { Users } = require('../../database/models');
const { HashPassMethods } = require('../utils/HashPassMethods');
const {TransportMethods} = require('../utils/Transportmailer');
const { writeHTMLBody } = require('../mail/textMail');

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
  },

  async sendResetEmail(email, url, token) {
    const transporter = new TransportMethods();

    await transporter.runMail(email, writeHTMLBody(url, token));
  }
}