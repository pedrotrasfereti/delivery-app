const sinon = require("sinon");
const { expect } = require('chai');
const salesController = require("../../app/controllers/salesController");
const salesService = require("../../app/services/salesService");
const { createSalePayload } = require("../mocks/Request");

describe('Tests salesController', () => {
  const { sale, products } = createSalePayload;

  afterEach(() => {
    sinon.restore();
  });


  describe('Tests createSale method', () => {

    describe('When no sale object is provided', () => {
      const req = { body: { products } };
      const res = {};
      it('Returns status 500 with error message', async () => {
        try {
          await salesController.createSale(req, res);
        } catch (err) {
          expect(err.message).to.equal("\"sale\" is required");
        }
      })
    })

    describe("When no userId is provided", () => {
      const { sellerId, totalPrice, deliveryAddress, deliveryNumber } = sale
      const req = {
        body: {
          sale: {
            sellerId,
            totalPrice,
            deliveryAddress,
            deliveryNumber
          },
          products
        }
      };
      const res = {};
      it('Return status 500 with error message', async () => {
        try {
          await salesController.createSale(req, res);
        } catch (err) {
          expect(err.message).to.equal('userId is required');
        }
      })
    })

    describe("When no sellerId is provided", () => {
      const { userId, totalPrice, deliveryAddress, deliveryNumber } = sale
      const req = {
        body: {
          sale: {
            userId,
            totalPrice,
            deliveryAddress,
            deliveryNumber
          },
          products
        }
      };
      const res = {};
      it('Return status 500 with error message', async () => {
        try {
          await salesController.createSale(req, res);
        } catch (err) {
          expect(err.message).to.equal('sellerId is required');
        }
      })
    })

    describe("When no totalPrice is provided", () => {
      const { userId, sellerId, deliveryAddress, deliveryNumber } = sale
      const req = {
        body: {
          sale: {
            userId,
            sellerId,
            deliveryAddress,
            deliveryNumber
          },
          products
        }
      };
      const res = {};
      it('Return status 500 with error message', async () => {
        try {
          await salesController.createSale(req, res);
        } catch (err) {
          expect(err.message).to.equal('totalPrice is required');
        }
      })
    })

    describe("When no deliveryAddress is provided", () => {
      const { userId, sellerId, totalPrice, deliveryNumber } = sale
      const req = {
        body: {
          sale: {
            userId,
            sellerId,
            totalPrice,
            deliveryNumber
          },
          products
        }
      };
      const res = {};
      it('Return status 500 with error message', async () => {
        try {
          await salesController.createSale(req, res);
        } catch (err) {
          expect(err.message).to.equal('deliveryAddress is required');
        }
      })
    })

    describe("When deliveryAddress is not a string", () => {
      const { userId, sellerId, totalPrice, deliveryNumber } = sale
      const req = {
        body: {
          sale: {
            userId,
            sellerId,
            totalPrice,
            deliveryAddress: 1,
            deliveryNumber
          },
          products
        }
      };
      const res = {};
      it('Return status 500 with error message', async () => {
        try {
          await salesController.createSale(req, res);
        } catch (err) {
          expect(err.message).to.equal('deliveryAddress must be a string');
        }
      })
    })

    describe("When no deliveryNumber is provided", () => {
      const { userId, sellerId, totalPrice, deliveryAddress } = sale
      const req = {
        body: {
          sale: {
            userId,
            sellerId,
            totalPrice,
            deliveryAddress
          },
          products
        }
      };
      const res = {};
      it('Return status 500 with error message', async () => {
        try {
          await salesController.createSale(req, res);
        } catch (err) {
          expect(err.message).to.equal('deliveryNumber is required');
        }
      })
    })

    describe("When deliveryNumber is not a string", () => {
      const { userId, sellerId, totalPrice, deliveryAddress } = sale
      const req = {
        body: {
          sale: {
            userId,
            sellerId,
            totalPrice,
            deliveryAddress,
            deliveryNumber: 1
          },
          products
        }
      };
      const res = {};
      it('Return status 500 with error message', async () => {
        try {
          await salesController.createSale(req, res);
        } catch (err) {
          expect(err.message).to.equal('deliveryNumber must be a string');
        }
      })
    })

    describe('When no products object is provided', () => {
      const req = { body: { sale } };
      const res = {};
      it('Returns status 500 with error message', async () => {
        try {
          await salesController.createSale(req, res);
        } catch (err) {
          expect(err.message).to.equal("\"products\" is required");
        }
      })
    })

    describe('When no productId is provided', () => {
      const req = {
        body: {
          sale,
          products: [{
            quantity: 1,
          }]
        }
      };
      const res = {};
      it('Returns status 500 with error message', async () => {
        try {
          await salesController.createSale(req, res);
        } catch (err) {
          expect(err.message).to.equal("productId is required");
        }
      })
    })

    describe('When no quantity is provided', () => {
      const req = {
        body: {
          sale,
          products: [{
            productId: 1,
          }]
        }
      };
      const res = {};
      it('Returns status 500 with error message', async () => {
        try {
          await salesController.createSale(req, res);
        } catch (err) {
          expect(err.message).to.equal("quantity is required");
        }
      })
    })

    describe("When the request body is valid", () => {
      const req = { body: { sale, products } };
      const res = {};
      it('Return status 201 with the created product', async () => {
        const createSaleStub = sinon.stub(salesService, 'createSale').resolves(sale);

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(null);

        await salesController.createSale(req, res);
        sinon.assert.calledWith(createSaleStub, sale, products);
        expect((res.status).calledWith(201)).to.equal(true);
        expect((res.json).calledWith(sale)).to.equal(true);
      })
    })
  })

  describe('Tests getSales method', () => {
    const req = { user: { id: 1 } };
    const res = {};

    it('Returns status 200 with an array of sales', async () => {
      const getSalesStub = sinon.stub(salesService, 'getSales').resolves([sale]);
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(null);

      await salesController.getSales(req, res);
      sinon.assert.calledWith(getSalesStub, req.user.id);
      expect((res.status).calledWith(200)).to.equal(true);
      expect((res.json).calledWith([sale])).to.equal(true);
    })
  })

  describe('Tests getSalesBySeller method', () => {
    const req = { user: { id: 1 } };
    const res = {};

    it('Returns status 200 with an array of sales', async () => {
      const getSalesBySellerStub = sinon.stub(salesService, 'getSalesBySeller').resolves([sale]);
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(null);

      await salesController.getSalesBySeller(req, res);
      sinon.assert.calledWith(getSalesBySellerStub, req.user.id);
      expect((res.status).calledWith(200)).to.equal(true);
      expect((res.json).calledWith([sale])).to.equal(true);
    })
  })

  describe('Tests getSale method', () => {
    const req = { params: { id: 1 } };
    const res = {};

    it('Returns status 200 with one sale', async () => {
      const getSaleStub = sinon.stub(salesService, 'getSale').resolves(sale);
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(null);

      await salesController.getSale(req, res);
      sinon.assert.calledWith(getSaleStub, req.params.id);
      expect((res.status).calledWith(200)).to.equal(true);
      expect((res.json).calledWith(sale)).to.equal(true);
    })
  })

  describe('Tests updateSaleStatus method', () => {

    describe('When status is one of the correct strings', () => {
      const req = { params: { id: 1 }, body: { status: 'Preparando' } };
      const res = {};
      it('Returns status 200 with updated sale', async () => {
        const updateSaleStub = sinon.stub(salesService, 'updateSaleStatus').resolves(sale);
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(null);

        await salesController.updateSaleStatus(req, res);
        sinon.assert.calledWith(updateSaleStub, req.params.id, req.body.status);
        expect((res.status).calledWith(200)).to.equal(true);
        expect((res.json).calledWith(sale)).to.equal(true);
      })
    })
    describe('When the status is not one of the correct strings', () => {
      const req = { params: { id: 1 }, body: { status: 'testState' } };
      const res = {};

      it('Returns status 500 with error message', async () => {
        try {
          await salesController.updateSaleStatus(req, res);
        } catch (err) {
          expect(err.message).to.equal('"status" must be one of [Preparando, Em Trânsito, Entregue]');
        }
      })
    })
  })
})