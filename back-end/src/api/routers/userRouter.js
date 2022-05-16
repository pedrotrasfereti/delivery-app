const { Router } = require('express');
const rescue = require('express-rescue');
const userController = require('../../app/controllers/userController');

const userRouter = Router();

userRouter.post('/', rescue(userController.create));
userRouter.get('/', rescue(userController.getAll));

module.exports = userRouter;
