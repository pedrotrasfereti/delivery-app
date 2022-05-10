const sellerModel = require('../models/sellerModel');

module.exports = {
    async getAllSalesService(id) {
        const getSales = await sellerModel.getAllSalesModel(id);
        return getSales;
    },
};