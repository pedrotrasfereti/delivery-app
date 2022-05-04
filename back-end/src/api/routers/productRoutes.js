const { Router } = require('express');
const rescue = require('express-rescue');
const productController = require('../../app/controllers/productController');

const productRouter = Router();

productRouter.get('/', rescue(productController.getAll));

module.exports = productRouter;
