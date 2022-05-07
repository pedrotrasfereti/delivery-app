const productService = require('../services/productService');

module.exports = {
  async getAll(_req, res) {
    const products = await productService.getAll({ raw: true });

    return res.status(200).json(products);
  },
};
