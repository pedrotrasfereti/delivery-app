const {
    expect
  } = require('chai');
  const chai = require('chai');
  const sinon = require('sinon');
  const {
    Sales
  } = require('../database/models/');
  const salesModelApp = require('../app/models/salesModel');

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
        }
        const mockSaleApp = {
                "userId": 3,
                "sellerId": 2,
                "totalPrice": 20.35,
                "deliveryAddress": "antonio marcos da cruz",
                "deliveryNumber": "571",
                "status": "in progress"
        }
          before(() => {
            sinon.stub(Sales, "create").resolves(mockSale)
          })
          after(() => {
            sinon.restore();
          })
          it ("Return a object with data of one sale", async () => {
            const saleCreated = await salesModelApp.createSale(mockSaleApp)
            expect(saleCreated).to.be.a("object");
            expect(saleCreated).to.have.property("id")
          })
      })
  })