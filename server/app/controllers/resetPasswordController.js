const resetPassService = require('../services/resetPasswordService');
const validator = require('../validators/validator');

module.exports = {
  async resetPassword(req, res) {
    const {email, newPass} = req.body
    await validator.resetPass({email, newPass});
    const resetPassword = await resetPassService.resetPassword(req.body)

    res.status(201).json('ok');
  }
}