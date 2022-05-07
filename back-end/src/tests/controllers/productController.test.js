const sinon = require("sinon");
const { expect } = require('chai');
const productService = require("../../app/services/productService");
const productController = require("../../app/controllers/productController");
const { productsMock } = require("../mocks/Database");

describe('Tests productController', () => {
  afterEach(() => {
    sinon.restore();
  });


  describe('Tests getAll method', () => {
    const res = {};
    const req = {};

    it('Return status 200 with the products', async () => {
      const getAllStub = sinon.stub(productService, 'getAll').resolves(productsMock);
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(null);

      await productController.getAll(req, res);
      sinon.assert.calledWith(getAllStub, { raw: true });
      expect((res.status).calledWith(200)).to.equal(true);
      expect((res.json).calledWith(productsMock)).to.equal(true);
    })
  })
})