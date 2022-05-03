const userService = require('../services/userService');
const validator = require('../validators/validator');

module.exports = {
  async create(req, res) {
    await validator.user(req.body);
    const userCreated = await userService.create(req.body);

    return res.status(201).json(userCreated);
  },

  async getAll(_req, res) {
    const users = await userService.getAll();
    return res.status(200).json(users);
  },
};
