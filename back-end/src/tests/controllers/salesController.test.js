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
  const productMock = {
    productId: 1,
    quantity: 2,
  }

  afterEach(() => {
    sinon.restore();
  });


  describe('Tests createSale method', () => {
    const req = { body: { sale: saleMock, products: productMock } };
    const res = {};

    it('Return status 201 with the created product', async () => {
      const createSaleStub = sinon.stub(salesService, 'createSale').resolves(saleMock);

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(null);

      await salesController.createSale(req, res);
      sinon.assert.calledWith(createSaleStub, saleMock, productMock);
      expect((res.status).calledWith(201)).to.equal(true);
      expect((res.json).calledWith(saleMock)).to.equal(true);
    })
  })

  describe('Tests getSales method', () => {
    const req = { user: { id: 1 } };
    const res = {};

    it('Returns status 200 with an array of sales', async () => {
      const getSalesStub = sinon.stub(salesService, 'getSales').resolves([saleMock]);
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(null);

      await salesController.getSales(req, res);
      sinon.assert.calledWith(getSalesStub, req.user.id);
      expect((res.status).calledWith(200)).to.equal(true);
      expect((res.json).calledWith([saleMock])).to.equal(true);
    })
  })

  describe('Tests getSale method', () => {
    const req = { params: { id: 1 } };
    const res = {};

    it('Returns status 200 with one sale', async () => {
      const getSaleStub = sinon.stub(salesService, 'getSale').resolves(saleMock);
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(null);

      await salesController.getSale(req, res);
      sinon.assert.calledWith(getSaleStub, req.params.id);
      expect((res.status).calledWith(200)).to.equal(true);
      expect((res.json).calledWith(saleMock)).to.equal(true);
    })
  })
})