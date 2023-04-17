const resetPassService = require('../services/resetPasswordService');
const validator = require('../validators/validator');

module.exports = {
  async resetPassword(req, res) {
    const { newPass } = req.body;
    await validator.resetPass({ newPass });
    await resetPassService.resetPassword(req.body);

    res.status(201).json('ok');
  },

  async sendResetEmail(req, res) {
    const { email, url } = req.body;
    const sendEmail = await resetPassService.sendResetEmail(email, url);

    res.status(200).json({ confirm: sendEmail });
  },
};