const { expect } = require('chai');
const sinon = require('sinon');
const { Sales, Products } = require('../../database/models');
const salesModel = require('../../app/models/salesModel');
const salesproductsModel = require('../../app/models/salesproductsModel');
const userModel = require('../../app/models/userModel');
const { userMock, saleMockDatavalues } = require('../mocks/Database');
const { createSalePayload } = require('../mocks/Request');
const { includeOption, findOneQuery } = require('../mocks/Utils');

describe('Testing sales model', function () {
  const { sale, products } = createSalePayload;
  const { dataValues: saleMock } = saleMockDatavalues;
  const id = 1;

  afterEach(function () {
    sinon.restore();
  });

  describe('Testing createSale method', function () {
    it('Return a created sale', async function () {
      const createStub = sinon.stub(Sales, 'create').resolves(saleMock);
      const createProductsStub = sinon.stub(salesproductsModel, 'create').resolves();
      sinon.stub(Date, 'now').returns(saleMock.saleDate);
      const saleCreated = await salesModel.createSale(sale, products);

      sinon.assert.calledWith(createStub, { ...sale, saleDate: saleMock.saleDate, status: 'Pendente' });
      sinon.assert.calledWith(createProductsStub, [{ saleId: saleMock.id, ...products[0] }]);
      expect(saleCreated).to.be.a('object');
      expect(saleCreated).to.be.deep.equal(saleMock);
    });
  });

  describe('Testing getSales method', function () {
    it('Return an array of sales', async function () {
      const findAllStub = sinon.stub(Sales, 'findAll').resolves([saleMock]);
      const sales = await salesModel.getSales(id);

      sinon.assert.calledWith(findAllStub, { where: { userId: id }, include: includeOption });
      expect(sales).to.be.a('array');
      expect(sales).to.be.deep.equal([saleMock]);
    });
  });

  describe('Testing getSalesBySeller method', function () {
    it('Return an array of sales', async function () {
      const getSalesBySellerStub = sinon.stub(Sales, 'findAll').resolves([saleMock]);
      const sales = await salesModel.getSalesBySeller(id);

      sinon.assert.calledWith(getSalesBySellerStub, { where: { sellerId: id }, include: includeOption });
      expect(sales).to.be.a('array');
      expect(sales).to.be.deep.equal([saleMock]);
    });
  });

  describe('Testing getSale method', function () {
    it('Return one sale', async function () {
      const findOneSaleStub = sinon.stub(Sales, 'findOne').resolves(saleMockDatavalues);
      const getUserByIdStub = sinon.stub(userModel, 'getById').resolves(userMock);
      const sales = await salesModel.getSale(id);

      sinon.assert.calledWith(findOneSaleStub, findOneQuery);
      sinon.assert.calledWith(getUserByIdStub, saleMock.sellerId);
      expect(sales).to.be.a('object');
      expect(sales.dataValues).to.be.deep.equal({ ...saleMockDatavalues.dataValues, sellerName: userMock.name });
    });
  });
});