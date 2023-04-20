const { expect } = require('chai');
const sinon = require('sinon');
const salesService = require('../../app/services/salesService');
const salesModel = require('../../app/models/salesModel');
const { saleMockDatavalues } = require('../mocks/Database');

describe('Tests salesService', function () {
  const { dataValues: saleMock } = saleMockDatavalues;
  const id = 1;

  afterEach(function () {
    sinon.restore();
  });

  describe('Tests createSale method', function () {
    it('Returns created sale', async function () {
      const createStub = sinon.stub(salesModel, 'createSale').resolves(saleMock);
      const sale = await salesService.createSale(saleMock);

      sinon.assert.calledWith(createStub, saleMock);
      expect(sale).to.be.a('object');
      expect(sale).to.be.deep.equal(saleMock);
    });
  });

  describe('Tests getSales method', function () {
    it('Returns an array of sales', async function () {
      const getStub = sinon.stub(salesModel, 'getSales').resolves([saleMock]);
      const sales = await salesService.getSales(id);

      sinon.assert.calledWith(getStub, id);
      expect(sales).to.be.a('array');
      expect(sales).to.be.deep.equal([saleMock]);
    });
  });

  describe('Tests getSalesBySeller method', function () {
    it('Returns an array of sales', async function () {
      const getSalesBySellerStub = sinon.stub(salesModel, 'getSalesBySeller').resolves([saleMock]);
      const sales = await salesService.getSalesBySeller(id);

      sinon.assert.calledWith(getSalesBySellerStub, id);
      expect(sales).to.be.a('array');
      expect(sales).to.be.deep.equal([saleMock]);
    });
  });

  describe('Tests getSale method', function () {
    it('Returns an array of sales', async function () {
      const getStub = sinon.stub(salesModel, 'getSales').resolves([saleMock]);
      const sales = await salesService.getSales(id);

      sinon.assert.calledWith(getStub, id);
      expect(sales).to.be.a('array');
      expect(sales).to.be.deep.equal([saleMock]);
    });
  });

  describe('Tests getSale method', function () {
    it('Returns one sale', async function () {
      const getStub = sinon.stub(salesModel, 'getSale').resolves(saleMock);
      const sale = await salesService.getSale(id);

      sinon.assert.calledWith(getStub, id);
      expect(sale).to.be.a('object');
      expect(sale).to.be.deep.equal(saleMock);
    });
  });

  describe('Tests updateSaleStatus method', function () {
    it('Returns updated sale', async function () {
      const getStub = sinon.stub(salesModel, 'getSale').resolves({ ...saleMock, save: sinon.stub() });
      const updatedSale = await salesService.updateSaleStatus(id, 'delivered');

      sinon.assert.calledWith(getStub, id);
      expect(updatedSale).to.be.a('object');
      expect(updatedSale.status).to.be.equal('delivered');
    });
  });
});