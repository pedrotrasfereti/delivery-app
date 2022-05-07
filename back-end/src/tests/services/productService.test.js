const productModel = require("../../app/models/productModel");
const productService = require("../../app/services/productService");
const { expect } = require("chai");
const sinon = require("sinon");
const { productsMock } = require("../mocks/Database");

describe('Tests productService', () => {
  afterEach(() => {
    sinon.restore();
  })

  describe('Tests getAll method', () => {
    it('Return an array with all products', async () => {
      const getAllStub = sinon.stub(productModel, 'getAll').resolves(productsMock);
      const products = await productService.getAll();

      sinon.assert.calledWith(getAllStub, { raw: true });
      expect(products).to.be.a('array');
      expect(products).to.be.deep.equal(productsMock);
    })
  })
})