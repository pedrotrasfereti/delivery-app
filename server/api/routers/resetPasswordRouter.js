const { Router } = require('express');
const rescue = require('express-rescue');
const resetPassController = require('../../app/controllers/resetPasswordController');

const resetPassRouter = Router();

resetPassRouter.post('/password', rescue(resetPassController.resetPassword));
resetPassRouter.post('/sendmail', rescue(resetPassController.sendResetEmail));

module.exports = resetPassRouter;
