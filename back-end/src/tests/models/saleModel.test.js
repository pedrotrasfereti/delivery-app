const { expect } = require('chai');
const sinon = require('sinon');
const { Sales } = require('../../database/models');
const salesModelApp = require('../../app/models/salesModel');

describe("Testing sales model", () => {
  describe("Testing createSale method", () => {
    const mockSale = {
      id: 1,
      userId: 3,
      sellerId: 2,
      totalPrice: 20.35,
      deliveryAddress: "antonio marcos da cruz",
      deliveryNumber: "571",
      saleDate: "2020-05-02T00:00:00.000Z",
      status: "in progress"
    };

    const mockSaleApp = {
      userId: 3,
      sellerId: 2,
      totalPrice: 20.35,
      deliveryAddress: "antonio marcos da cruz",
      deliveryNumber: "571",
      status: "in progress"
    };

    afterEach(() => {
      sinon.restore();
    });

    it("Return a created sale", async () => {
      const createStub = sinon.stub(Sales, "create").resolves(mockSale)
      const saleCreated = await salesModelApp.createSale(mockSaleApp)

      sinon.assert.calledWith(createStub, { ...mockSaleApp, saleDate: new Date() });
      expect(saleCreated).to.be.a("object");
      expect(saleCreated).to.be.deep.equal(mockSale);
    });
  });
});
