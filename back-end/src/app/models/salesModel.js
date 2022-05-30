const {
  Sales,
  Products,
} = require('../../database/models');

const salesProductsModel = require('./salesproductsModel');
const userModel = require('./userModel');

module.exports = {
  async createSale(obj, products) {
    const sale = await Sales.create({
      ...obj,
      saleDate: Date.now(),
      status: 'Pendente',
    });

    const newProducts = await products.map((product) => ({
      saleId: sale.id,
      ...product,
    }));

    await salesProductsModel.create(newProducts);

    return sale;
  },

  async getSales(id) {
    const sales = await Sales.findAll({
      where: { userId: id },
      include: [{
        model: Products,
        as: 'products',
        through: {
          attributes: ['quantity'],
          as: 'quantity',
        },
      }],
    });

    return sales;
  },

  async getSalesBySeller(id) {
    const sales = await Sales.findAll({
      where: { sellerId: id },
      include: [{
        model: Products,
        as: 'products',
        through: {
          attributes: ['quantity'],
          as: 'quantity',
        },
      }],
    });

    return sales;
  },

  async getSale(id) {
    const sale = await Sales.findOne({
      where: { id },
      include: [{
        model: Products,
        as: 'products',
        through: {
          attributes: ['quantity'],
          as: 'quantity',
        },
      }],
    });

    const seller = await userModel.getById(sale.dataValues.sellerId);
    sale.dataValues.sellerName = seller.name;
    return sale;
  },
};
