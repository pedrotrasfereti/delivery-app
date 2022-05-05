const { Sales } = require('../../database/models');

module.exports = {
    async createSale(obj) {
        const sale = await Sales.create({
            userId: obj.userId,
            sellerId: obj.sellerId,
            totalPrice: obj.totalPrice,
            deliveryAddress: obj.deliveryAddress,
            deliveryNumber: obj.deliveryNumber,
            saleDate: new Date(),
            status: obj.status,
        });
        return sale;
    },
    
    async getSales(id) {
      const sales = await Sales.findAll({
        where: { id },
      });

      return sales;
    },
};
