// const validatorSale = require('../validators/validatorSale');
const salesService = require('../services/salesService');

module.exports = {
    async createSale(req, res) {
        const obj = req.body;
        const saleCreated = await salesService.createSale(obj);
        return res.status(201).json(saleCreated);
    },
};
