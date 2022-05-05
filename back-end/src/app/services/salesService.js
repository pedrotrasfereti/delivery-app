const salesModel = require('../models/salesModel');

module.exports = {
    async createSale(obj) {
        const created = await salesModel.createSale(obj);
        return created;
    },

    async getSales(id) {
      const sales = await salesModel.findAll(id);

      return sales;
    },
};
