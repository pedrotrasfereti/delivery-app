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

    async getSale(id) {
      const sale = await salesModel.getSale(id);
      return sale;
    },
};
