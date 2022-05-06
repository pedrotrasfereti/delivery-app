const { expect } = require("chai");
const sinon = require("sinon");
const salesService = require("../../app/services/salesService");
const salesModel = require("../../app/models/salesModel");

describe('Tests salesService', () => {
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
  })

  describe('Tests createSale method', () => {

    it('Returns created sale', async () => {
      const createStub = sinon.stub(salesModel, 'createSale').resolves(saleMock);
      const sale = await salesService.createSale(saleMock);

      sinon.assert.calledWith(createStub, saleMock);
      expect(sale).to.be.a('object');
      expect(sale).to.be.deep.equal(saleMock);
    })
  })

  describe('Tests getSales method', () => {
    const id = 1;

    it('Returns an array of sales', async () => {
      const getStub = sinon.stub(salesModel, 'getSales').resolves([saleMock]);
      const sales = await salesService.getSales(id);

      sinon.assert.calledWith(getStub, id);
      expect(sales).to.be.a('array');
      expect(sales).to.be.deep.equal([saleMock]);
    })
  })

  describe('Tests getSale method', () => {
    const id = 1;

    it('Returns an array of sales', async () => {
      const getStub = sinon.stub(salesModel, 'getSales').resolves([saleMock]);
      const sales = await salesService.getSales(id);

      sinon.assert.calledWith(getStub, id);
      expect(sales).to.be.a('array');
      expect(sales).to.be.deep.equal([saleMock]);
    })
  })

  describe('Tests getSale method', () => {
    const id = 1;

    it('Returns one sale', async () => {
      const getStub = sinon.stub(salesModel, 'getSale').resolves(saleMock);
      const sale = await salesService.getSale(id);

      sinon.assert.calledWith(getStub, id);
      expect(sale).to.be.a('object');
      expect(sale).to.be.deep.equal(saleMock);
    })
  })
})