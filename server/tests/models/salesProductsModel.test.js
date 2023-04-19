const { expect } = require('chai');
const sinon = require('sinon');
const salesproductsModel = require('../../app/models/salesproductsModel');
const { SalesProducts } = require('../../database/models');
const { salesProductsMock } = require('../mocks/Database');
const { createSalesProductsPayload } = require('../mocks/Request');

describe('Testing salesProducts model', function () {
  describe('Testing create method', function () {
    afterEach(function () {
      sinon.restore();
    });
    it('Return the created products', async function () {
      const bulkCreateStub = sinon.stub(SalesProducts, 'bulkCreate').resolves(salesProductsMock);
      const salesProducts = await salesproductsModel.create(createSalesProductsPayload);

      sinon.assert.calledWith(bulkCreateStub, createSalesProductsPayload);
      expect(salesProducts).to.be.a('array');
      expect(salesProducts).to.be.deep.equal(salesProductsMock);
    });
  });
});