const salesModel = require('../models/salesModel');

module.exports = {
    async createSale(obj) {
        const created = await salesModel.createSale(obj);
        return created;
    },
};
