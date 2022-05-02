const express = require('express');
const { Sales, Users, SalesProducts, Products } = require('../database/models');

const app = express();

const testSale = {
  id: 1,
  userId: 3,
  sellerId: 2,
  totalPrice: 20.35,
  deliveryAddress: 'Test street',
  deliveryNumber: '136',
  saleDate: '2020-05-02',
  status: 'true',
};

const testSalesProduct = {
  saleId: 1,
  productId: 2,
  quantity: 2,
};

app.get('/test', async (_req, res) => {
  await Sales.create(testSale);
  await SalesProducts.create(testSalesProduct);

  const sales = await Sales.findAll({
    include: [{
      model: Users,
      as: 'user',
    }, {
      model: Users,
      as: 'seller',
    }, {
      model: Products,
      as: 'products',
      through: {
        attributes: ['quantity'],
      },
    }],
  });
  res.json({ sales });
});

module.exports = app;
