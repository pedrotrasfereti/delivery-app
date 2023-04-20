const { expect } = require('chai');
const sinon = require('sinon');
const productModel = require('../../app/models/productModel');
const productService = require('../../app/services/productService');
const { productsMock } = require('../mocks/Database');

describe('Tests productService', function () {
  afterEach(function () {
    sinon.restore();
  });

  describe('Tests getAll method', function () {
    it('Return an array with all products', async function () {
      const getAllStub = sinon.stub(productModel, 'getAll').resolves(productsMock);
      const products = await productService.getAll();

      sinon.assert.calledWith(getAllStub, { raw: true });
      expect(products).to.be.a('array');
      expect(products).to.be.deep.equal(productsMock);
    });
  });
});