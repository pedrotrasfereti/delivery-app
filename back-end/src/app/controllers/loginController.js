const validator = require('../validators/validator');
const loginService = require('../services/loginService');

module.exports = {
  async login(req, res) {
    await validator.login(req.body);
    const token = await loginService.login(req.body);
    return res.status(201).json(token);
  },

};
