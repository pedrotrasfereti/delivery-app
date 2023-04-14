const resetPasswordModel = require('../models/resetPasswordModel');
const { JwtMethods } = require('../utils/JwtMethods');

module.exports = {
  async resetPassword({token = "", email, newPass}) {
    if(token === '') throw new Error('Token not found')
    const verifyToken = JwtMethods.verifyToken(token);

    if (!verifyToken) throw new Error('Token invalid or expired')

    const resetPass = await resetPasswordModel.resetPassword({ email, newPass });

    return resetPass;
  },

};
