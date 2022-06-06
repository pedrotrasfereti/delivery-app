const { Router } = require('express');
const rescue = require('express-rescue');
const loginController = require('../../app/controllers/loginController');

const loginRouter = Router();

loginRouter.post('/', rescue(loginController.login));

module.exports = loginRouter;
