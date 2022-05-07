const sinon = require("sinon");
const { expect } = require('chai');
const { validateUserToken } = require("../../api/middlewares/validate-user-token");
const { JwtMethods } = require("../../app/utils/JwtMethods");

describe('Tests validateUserToken', () => {

  afterEach(() => {
    sinon.restore();
  })

  describe('When token is not found', () => {
    const req = { headers: { authorization: null } };
    const res = {};
    const next = sinon.stub();

    it('Returns status 401 with an error message', async () => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(null);

      await validateUserToken('customer')(req, res, next);
      expect((res.status).calledWith(401)).to.equal(true);
      expect((res.json).calledWith({ error: 'Token not found' })).to.equal(true);
    })
  })

  describe('When token is invalid', () => {
    const req = { headers: { authorization: 'invalidToken' } };
    const res = {};
    const next = sinon.stub();

    it('Returns status 401 with an error message', async () => {
      const verifyTokenStub = sinon.stub(JwtMethods, 'verifyToken').rejects(new Error());
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(null);

      try {
        await validateUserToken('customer')(req, res, next);
      } catch (err) {
        sinon.assert.calledWith(verifyTokenStub, 'invalidToken');
        expect((res.status).calledWith(401)).to.equal(true);
        expect((res.json).calledWith({ error: 'Token invalid or expired' })).to.equal(true);
      }
    })
  })

  describe('When the verified role is different than the token\'s role', () => {
    const req = { headers: { authorization: 'validToken' } };
    const res = {};
    const next = sinon.stub();

    it('Returns status 401 with an error message', async () => {
      const verifyTokenStub = sinon.stub(JwtMethods, 'verifyToken').returns({ role: 'seller' });
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(null);

      try {
        await validateUserToken('customer')(req, res, next);
      } catch (err) {
        sinon.assert.calledWith(verifyTokenStub, 'validToken');
        expect((res.status).calledWith(401)).to.equal(true);
        expect((res.json).calledWith({ error: 'Token invalid or expired' })).to.equal(true);
      }
    })
  })

  describe('When token is valid', () => {
    const req = { headers: { authorization: 'validToken' } };
    const res = {};
    const next = sinon.stub();

    it('Calls next() method', async () => {
      const verifyTokenStub = sinon.stub(JwtMethods, 'verifyToken').returns({ role: 'customer' });
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(null);

      validateUserToken('customer')(req, res, next);

      sinon.assert.calledWith(verifyTokenStub, 'validToken');
      sinon.assert.called(next);
      expect(req.user).to.contain({ role: 'customer' });
    })
  })
})