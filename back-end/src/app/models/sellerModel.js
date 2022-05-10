const { Sales } = require('../../database/models');

module.exports = {
    async getAllSalesModel(id) {
        const getSales = await Sales.findAll({
            where: { sellerId: id },
            raw: true,
        });
        console.log('model');
        return getSales;
    },
};