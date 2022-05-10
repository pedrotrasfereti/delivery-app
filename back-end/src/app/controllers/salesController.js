// const validatorSale = require('../validators/validatorSale');
const salesService = require('../services/salesService');

module.exports = {
    async createSale(req, res) {
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
      const sale = await salesService.updateSaleStatus(req.params.id, req.body.status);
      return res.status(200).json(sale);
    },
};
