const { Router } = require('express');
const rescue = require('express-rescue');
const loginController = require('../../app/controllers/loginController');

const loginRouter = Router();

loginRouter.post('/', rescue(loginController.login));
loginRouter.get('/', rescue(loginController.getAll));

module.exports = loginRouter;
