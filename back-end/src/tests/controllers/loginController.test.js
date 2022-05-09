const { expect } = require('chai');
const sinon = require('sinon');
const loginController = require('../../app/controllers/loginController');
const loginService = require('../../app/services/loginService');
const { userMock } = require('../mocks/Database');
const { loginUserPayload } = require('../mocks/Request');

describe('Tests loginController', () => {

  afterEach(() => {
    sinon.restore();
  });

  describe('When user fields are correct', () => {
    const req = { body: loginUserPayload };
    const res = {}

    it('Return status 200 with the user', async () => {
      const loginStub = sinon.stub(loginService, 'login').resolves(userMock);
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(null);

      await loginController.login(req, res);

      sinon.assert.calledWith(loginStub, loginUserPayload);
      expect((res.status).calledWith(200)).to.equal(true);
      expect((res.json).calledWith(userMock)).to.equal(true);
    });
  });

  describe('When the password is invalid', () => {
    it('Returns error message when no password is inserted', async () => {
      const req = { body: { name: loginUserPayload.name, email: loginUserPayload.email } };
      const res = {}

      try {
        await loginController.login(req, res);
      } catch (err) {
        expect(err.message).to.equal('"password" is required');
      }
    });

    it('Returns error message when the password length is invalid', async () => {
      const req = { body: { name: loginUserPayload.name, email: loginUserPayload.email, password: '123' } };
      const res = {}

      try {
        await loginController.login(req, res);
      } catch (err) {
        expect(err.message).to.equal('"password" length must be at least 6 characters long');
      }
    })
  })

  describe('When the email is invalid', () => {
    it('Returns error message when no email is inserted', async () => {
      const req = { body: { name: loginUserPayload.name, password: loginUserPayload.password } };
      const res = {}

      try {
        await loginController.login(req, res);
      } catch (err) {
        expect(err.message).to.equal('"email" is required');
      }
    });

    it('Returns error message when the email is invalid', async () => {
      const req = { body: { name: loginUserPayload.name, email: 'test@testcom', password: loginUserPayload.password } };
      const res = {}

      try {
        await loginController.login(req, res);
      } catch (err) {
        expect(err.message).to.equal('"email" must be a valid email');
      }
    })
  })

});