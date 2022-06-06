const { SalesProducts } = require('../../database/models');

module.exports = {
  async create(products) {
    const salesProducts = await SalesProducts.bulkCreate(products);
    return salesProducts;
  },
};
