const { Products } = require('../../database/models');

module.exports = {
  async getAll() {
    const products = await Products.findAll({ raw: true });
    return products;
  },
};
