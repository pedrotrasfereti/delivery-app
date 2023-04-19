const { expect } = require('chai');
const sinon = require('sinon');
const productModel = require('../../app/models/productModel');
const { Products } = require('../../database/models');
const { productsMock } = require('../mocks/Database');

describe('Testing product model', function () {
  describe('Testing getAll method', function () {
    afterEach(function () {
      sinon.restore();
    });
    it('Return an array of products', async function () {
      const findAllStub = sinon.stub(Products, 'findAll').resolves(productsMock);
      const products = await productModel.getAll();

      sinon.assert.calledWith(findAllStub, { raw: true });
      expect(products).to.be.a('array');
      expect(products).to.be.deep.equal(productsMock);
    });
  });
});