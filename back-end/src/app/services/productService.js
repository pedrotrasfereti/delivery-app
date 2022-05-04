const productModel = require('../models/productModel');

module.exports = {
  async getAll() {
    const products = await productModel.getAll({ raw: true });
    return products;
  },
};
