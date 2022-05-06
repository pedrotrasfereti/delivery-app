const { expect } = require("chai");
const sinon = require("sinon");
const salesService = require("../../app/services/salesService");
const salesModel = require("../../app/models/salesModel");

describe('Tests salesService', () => {
  describe('Tests createSale method', () => {
    const saleMock = {
      userId: 1,
      sellerId: 2,
      totalPrice: 2.2,
      deliveryAddress: 'testAddress',
      deliveryNumber: 'testNumber',
      status: 'pending',
    };

    it('Returns created sale', async () => {
      const createStub = sinon.stub(salesModel, 'createSale').resolves(saleMock);
      const sale = await salesService.createSale(saleMock);

      sinon.assert.calledWith(createStub, saleMock);
      expect(sale).to.be.a('object');
      expect(sale).to.be.deep.equal(saleMock);
    });
  });
});
