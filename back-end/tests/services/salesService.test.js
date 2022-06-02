const { expect } = require("chai");
const sinon = require("sinon");
const salesService = require("../../app/services/salesService");
const salesModel = require("../../app/models/salesModel");
const { saleMockDatavalues } = require("../mocks/Database");

describe('Tests salesService', () => {
  const { dataValues: saleMock } = saleMockDatavalues
  const id = 1;

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
    it('Returns an array of sales', async () => {
      const getStub = sinon.stub(salesModel, 'getSales').resolves([saleMock]);
      const sales = await salesService.getSales(id);

      sinon.assert.calledWith(getStub, id);
      expect(sales).to.be.a('array');
      expect(sales).to.be.deep.equal([saleMock]);
    })
  })

  describe('Tests getSalesBySeller method', () => {
    it('Returns an array of sales', async () => {
      const getSalesBySellerStub = sinon.stub(salesModel, 'getSalesBySeller').resolves([saleMock]);
      const sales = await salesService.getSalesBySeller(id);

      sinon.assert.calledWith(getSalesBySellerStub, id);
      expect(sales).to.be.a('array');
      expect(sales).to.be.deep.equal([saleMock]);
    })
  })

  describe('Tests getSale method', () => {
    it('Returns an array of sales', async () => {
      const getStub = sinon.stub(salesModel, 'getSales').resolves([saleMock]);
      const sales = await salesService.getSales(id);

      sinon.assert.calledWith(getStub, id);
      expect(sales).to.be.a('array');
      expect(sales).to.be.deep.equal([saleMock]);
    })
  })

  describe('Tests getSale method', () => {
    it('Returns one sale', async () => {
      const getStub = sinon.stub(salesModel, 'getSale').resolves(saleMock);
      const sale = await salesService.getSale(id);

      sinon.assert.calledWith(getStub, id);
      expect(sale).to.be.a('object');
      expect(sale).to.be.deep.equal(saleMock);
    })
  })

  describe('Tests updateSaleStatus method', () => {
    it('Returns updated sale', async () => {
      const getStub = sinon.stub(salesModel, 'getSale').resolves({...saleMock, save: sinon.stub()});
      const updatedSale = await salesService.updateSaleStatus(id, 'delivered');

      sinon.assert.calledWith(getStub, id);
      expect(updatedSale).to.be.a('object');
      expect(updatedSale.status).to.be.equal('delivered');
    })
  })
})