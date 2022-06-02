const userService = require('../services/userService');
const validator = require('../validators/validator');

module.exports = {
  async getAll(_req, res) {
    const usersSeller = await userService.getAll();
    return res.status(200).json(usersSeller);
  },
  async create(req, res) {
    await validator.user(req.body);
    const user = await userService.create(req.body);

    return res.status(201).json(user);
  },
};
