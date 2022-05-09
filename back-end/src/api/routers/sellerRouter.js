const { Router } = require('express');
const rescue = require('express-rescue');
const sellerController = require('../../app/controllers/sellerController')
const sellerRouter = Router();

sellerRouter.get('/orders', rescue(sellerController.getAllSales));
// sellerRouter.patch('/orders/:id', rescue())

module.exports = sellerRouter;