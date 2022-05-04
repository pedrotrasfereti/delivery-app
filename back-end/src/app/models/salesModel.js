const { Sales } = require('../../database/models');

module.exports = {
    async createSale(obj) {
        const sale = await Sales.create({...obj});
        return sale;
    },
}