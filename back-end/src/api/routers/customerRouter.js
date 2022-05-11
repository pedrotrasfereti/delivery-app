const { Router } = require('express');
const rescue = require('express-rescue');
const salesController = require('../../app/controllers/salesController');
const productController = require('../../app/controllers/productController');

const customerRouter = Router();
customerRouter.post('/checkout', rescue(salesController.createSale));
customerRouter.get('/orders/:id', rescue(salesController.getSale));
customerRouter.patch('/orders/:id', rescue(salesController.updateSaleStatus));
customerRouter.get('/orders', rescue(salesController.getSales));
customerRouter.get('/products', rescue(productController.getAll));

module.exports = customerRouter;
