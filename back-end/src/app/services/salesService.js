const salesModel = require('../models/salesModel');

module.exports = {
  async createSale(sale, products) {
    const created = await salesModel.createSale(sale, products);
    return created;
  },

  async getSales(id) {
    const sales = await salesModel.getSales(id);

    return sales;
  },

  async getSalesBySeller(id) {
    const sales = await salesModel.getSalesBySeller(id);

    return sales;
  },

  async getSale(id) {
    const sale = await salesModel.getSale(id);
    return sale;
  },

  async updateSaleStatus(id, status) {
    const sale = await salesModel.getSale(id);
    sale.status = status;
    sale.save();
    return sale;
  },
};
