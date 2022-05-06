const { expect } = require('chai');
const sinon = require('sinon');
const { Sales, Products } = require('../../database/models');
const salesModel = require('../../app/models/salesModel');
const salesproductsModel = require('../../app/models/salesproductsModel');

describe("Testing sales model", () => {
  const mockSale = {
    id: 1,
    userId: 3,
    sellerId: 2,
    totalPrice: 20.35,
    deliveryAddress: "antonio marcos da cruz",
    deliveryNumber: "571",
    saleDate: "2020-05-02T00:00:00.000Z",
    status: "in progress"
  }
  const mockSaleApp = {
    userId: 3,
    sellerId: 2,
    totalPrice: 20.35,
    deliveryAddress: "antonio marcos da cruz",
    deliveryNumber: "571",
    status: "in progress"
  }
  const mockProducts = [
    {
      productId: 1,
      quantity: 2
    }
  ]

  afterEach(() => {
    sinon.restore();
  })

  describe("Testing createSale method", () => {
    it("Return a created sale", async () => {
      const createStub = sinon.stub(Sales, "create").resolves(mockSale)
      const createProductsStub = sinon.stub(salesproductsModel, "create").resolves()
      sinon.stub(Date, "now").returns(mockSale.saleDate)
      const saleCreated = await salesModel.createSale(mockSaleApp, mockProducts)

      sinon.assert.calledWith(createStub, { ...mockSaleApp, saleDate: mockSale.saleDate })
      sinon.assert.calledWith(createProductsStub, [{ saleId: mockSale.id, ...mockProducts[0] }]);
      expect(saleCreated).to.be.a("object");
      expect(saleCreated).to.be.deep.equal(mockSale);
    });
  })

  describe("Testing getSales method", () => {
    const id = 1

    it("Return an array of sales", async () => {
      const findAllStub = sinon.stub(Sales, "findAll").resolves([mockSale])
      const sales = await salesModel.getSales(id)

      sinon.assert.calledWith(findAllStub, { where: { userId: id }, raw: true });
      expect(sales).to.be.a("array");
      expect(sales).to.be.deep.equal([mockSale]);
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
        },
      }],
    }

    it("Return one sale", async () => {
      const findOneStub = sinon.stub(Sales, "findOne").resolves(mockSale)
      const sales = await salesModel.getSale(id)

      sinon.assert.calledWith(findOneStub, findOneQuery);
      expect(sales).to.be.a("object");
      expect(sales).to.be.deep.equal(mockSale);
    })
  })
})