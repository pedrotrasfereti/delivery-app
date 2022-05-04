const { Router } = require('express');
const rescue = require('express-rescue');
const salesController = require('../../app/controllers/salesController');
const { validateUserToken }  = require('../middlewares/validate-user-token');

const salesRouter = Router();

salesRouter.post('/', validateUserToken, rescue(salesController.createSale))

module.exports = salesRouter;