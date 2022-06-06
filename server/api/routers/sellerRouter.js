const { Router } = require('express');
const rescue = require('express-rescue');
const salesController = require('../../app/controllers/salesController');

const sellerRouter = Router();

sellerRouter.get('/orders', rescue(salesController.getSalesBySeller));
sellerRouter.get('/orders/:id', rescue(salesController.getSale));
sellerRouter.patch('/orders/:id', rescue(salesController.updateSaleStatus));

module.exports = sellerRouter;