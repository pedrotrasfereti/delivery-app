// const validatorSale = require('../validators/validatorSale');
const salesService = require('../services/salesService');
const validator = require('../validators/validator');

module.exports = {
  async createSale(req, res) {
    await validator.sale(req.body);
    const { sale, products } = req.body;
    const saleCreated = await salesService.createSale(sale, products);
    return res.status(201).json(saleCreated);
  },

  async getSales(req, res) {
    const { id } = req.user;
    const sales = await salesService.getSales(id);

    return res.status(200).json(sales);
  },

  async getSalesBySeller(req, res) {
    const { id } = req.user;
    const sales = await salesService.getSalesBySeller(id);

    return res.status(200).json(sales);
  },

  async getSale(req, res) {
    const sale = await salesService.getSale(req.params.id);
    return res.status(200).json(sale);
  },

  async updateSaleStatus(req, res) {
    await validator.updateSale(req.body);
    const sale = await salesService.updateSaleStatus(req.params.id, req.body.status);
    return res.status(200).json(sale);
  },
};
