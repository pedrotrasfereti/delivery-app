const resetPassService = require('../services/resetPasswordService');
const validator = require('../validators/validator');

module.exports = {
  async resetPassword(req, res) {
    await validator.resetPass(req.body);
    await resetPassService.resetPassword(req.body);

    res.status(201).json('ok');
  },

  async sendResetEmail(req, res) {
    const { email, url } = req.body;
    const sendEmail = await resetPassService.sendResetEmail(email, url);

    res.status(200).json({ confirm: sendEmail });
  },
};