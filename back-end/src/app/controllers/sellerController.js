const sellerService = require('../services/sellerService');

module.exports = {
    async getAllSales(req, res) {
        const { id } = req.user;
        const getSales = await sellerService.getAllSalesService(id);
        return res.status(200).json(getSales);
    },
};