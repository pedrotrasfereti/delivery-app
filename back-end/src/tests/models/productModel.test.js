const { expect } = require('chai');
const sinon = require('sinon');
const productModel = require('../../app/models/productModel');
// const salesModelApp = require('../../app/models/salesModel');
const { Products } = require('../../database/models');

describe("Testing product model", () => {
  describe("Testing getAll method", () => {
    const productMock = {
      name: 'testProduct',
      price: 2.2,
      urlImg: 'testUrl',
    };

    afterEach(() => {
      sinon.restore();
    })

    it("Return an array of products", async () => {
      const findAllStub = sinon.stub(Products, "findAll").resolves([productMock]);
      const products = await productModel.getAll()

      sinon.assert.calledWith(findAllStub, { raw: true });
      expect(products).to.be.a("array");
      expect(products).to.be.deep.equal([productMock]);
    });
  });
});
