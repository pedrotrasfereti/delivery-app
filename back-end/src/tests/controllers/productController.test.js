const sinon = require("sinon");
const { expect } = require('chai');
const productService = require("../../app/services/productService");
const productController = require("../../app/controllers/productController");

describe('Tests productController', () => {
  const productMock = {
    name: 'testProduct',
    price: 2.2,
    urlImg: 'testUrl',
  };

  afterEach(() => {
    sinon.restore();
  });

  describe('Tests getAll method', () => {
    const res = {};
    const req = {};

    it('Return status 200 with the products', async () => {
      const getAllStub = sinon.stub(productService, 'getAll').resolves([productMock]);
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(null);

      await productController.getAll(req, res);
      sinon.assert.calledWith(getAllStub, { raw: true });
      expect((res.status).calledWith(200)).to.equal(true);
      expect((res.json).calledWith([productMock])).to.equal(true);
    });
  });
});
