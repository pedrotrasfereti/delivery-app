const resetPasswordModel = require('../models/resetPasswordModel');
const { JwtMethods } = require('../utils/JwtMethods');

module.exports = {
  async resetPassword({ token = '', newPass, email }) {
    if (token === '') throw new Error('Token not found');
    const verifyToken = JwtMethods.verifyToken(token);

    if (!verifyToken) throw new Error('Token invalid or expired');

    const resetPass = await resetPasswordModel.resetPassword({ email, newPass });

    return resetPass;
  },

  async sendResetEmail(email, url) {
    const token = JwtMethods.jwtResetPass({ email });

    const sendEmail = await resetPasswordModel.sendResetEmail(email, url, token);

    return sendEmail;
  },
};
