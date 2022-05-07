const validator = require('../validators/validator');
const loginService = require('../services/loginService');

module.exports = {
  async login(req, res) {
    await validator.login(req.body);
    const user = await loginService.login(req.body);
    return res.status(200).json(user);
  },
};
