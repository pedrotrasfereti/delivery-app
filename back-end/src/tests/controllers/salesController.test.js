const sinon = require("sinon");
const { expect } = require('chai');
const salesController = require("../../app/controllers/salesController");
const salesService = require("../../app/services/salesService");

describe('Tests productController', () => {
  const saleMock = {
    userId: 1,
    sellerId: 2,
    totalPrice: 2.2,
    deliveryAddress: 'testAddress',
    deliveryNumber: 'testNumber',
    status: 'pending',
  };

  afterEach(() => {
    sinon.restore();
  });


  describe('Tests createSale method', () => {
    const req = { body: saleMock };
    const res = {};

    it('Return status 200 with the products', async () => {
      const createSaleStub = sinon.stub(salesService, 'createSale').resolves(saleMock);

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(null);

      await salesController.createSale(req, res);
      sinon.assert.calledWith(createSaleStub, saleMock);
      expect((res.status).calledWith(201)).to.equal(true);
      expect((res.json).calledWith(saleMock)).to.equal(true);
    })
  })
})