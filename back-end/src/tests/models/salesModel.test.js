const { expect } = require('chai');
const sinon = require('sinon');
const { Sales, Products } = require('../../database/models');
const salesModel = require('../../app/models/salesModel');
const salesproductsModel = require('../../app/models/salesproductsModel');
const userModel = require('../../app/models/userModel');
const { userMock, saleMockDatavalues } = require('../mocks/Database');
const { createSalePayload } = require('../mocks/Request');

describe("Testing sales model", () => {
  const { sale, products } = createSalePayload;
  const { dataValues: saleMock } = saleMockDatavalues;

  afterEach(() => {
    sinon.restore();
  })

  describe("Testing createSale method", () => {
    it("Return a created sale", async () => {
      const createStub = sinon.stub(Sales, "create").resolves(saleMock)
      const createProductsStub = sinon.stub(salesproductsModel, "create").resolves()
      sinon.stub(Date, "now").returns(saleMock.saleDate)
      const saleCreated = await salesModel.createSale(sale, products)

      sinon.assert.calledWith(createStub, { ...sale, saleDate: saleMock.saleDate })
      sinon.assert.calledWith(createProductsStub, [{ saleId: saleMock.id, ...products[0] }]);
      expect(saleCreated).to.be.a("object");
      expect(saleCreated).to.be.deep.equal(saleMock);
    });
  })

  describe("Testing getSales method", () => {
    const id = 1

    it("Return an array of sales", async () => {
      const findAllStub = sinon.stub(Sales, "findAll").resolves([saleMock])
      const sales = await salesModel.getSales(id)

      sinon.assert.calledWith(findAllStub, { where: { userId: id }, raw: true });
      expect(sales).to.be.a("array");
      expect(sales).to.be.deep.equal([saleMock]);
    })
  })

  describe("Testing getSale method", () => {
    const id = 1
    const findOneQuery = {
      where: { id },
      include: [{
        model: Products,
        as: 'products',
        through: {
          attributes: ['quantity'],
          as: 'productQuantity',
        },
      }],
    }

    it("Return one sale", async () => {
      const findOneSaleStub = sinon.stub(Sales, "findOne").resolves(saleMock)
      const getUserByIdStub = sinon.stub(userModel, "getById").resolves(userMock)
      const sales = await salesModel.getSale(id)

      sinon.assert.calledWith(findOneSaleStub, findOneQuery);
      sinon.assert.calledWith(getUserByIdStub, saleMock.sellerId);
      expect(sales).to.be.a("object");
      expect(sales).to.be.deep.equal({ ...saleMock.dataValues, sellerName: userMock.name });
    })
  })
})