const { Router } = require('express');
const rescue = require('express-rescue');
const salesController = require('../../app/controllers/salesController');
const productController = require('../../app/controllers/productController');
const { validateUserToken } = require('../middlewares/validate-user-token');

const customerRouter = Router();
customerRouter.post('/checkout', validateUserToken, rescue(salesController.createSale));
customerRouter.get('/product', validateUserToken, rescue(productController.getAll));

module.exports = customerRouter;
