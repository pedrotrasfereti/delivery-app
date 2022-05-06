const { expect } = require('chai');
const sinon = require('sinon');
const loginController = require('../../app/controllers/loginController');
const loginService = require('../../app/services/loginService');

describe('Tests loginController', () => {
  const loginMock = {
    email: 'test@email.com',
    password: 'password',
  };

  const returnMock = {
    name: 'testUser',
    email: loginMock.email,
    role: 'customer',
    token: 'token',
  };

  afterEach(() => {
    sinon.restore();
  });

  describe('When user fields are correct', () => {
    const req = { body: loginMock };
    const res = {}

    it('Return status 201 with the user', async () => {
      const loginStub = sinon.stub(loginService, 'login').resolves(returnMock);
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(null);

      await loginController.login(req, res);

      sinon.assert.calledWith(loginStub, loginMock);
      expect((res.status).calledWith(201)).to.equal(true);
      expect((res.json).calledWith(returnMock)).to.equal(true);
    });
  });

  describe('When the password is invalid', () => {
    it('Returns error message when no password is inserted', async () => {
      const req = { body: { name: loginMock.name, email: loginMock.email } };
      const res = {}

      try {
        await loginController.login(req, res);
      } catch (err) {
        expect(err.message).to.equal('"password" is required');
      }
    });

    it('Returns error message when the password length is invalid', async () => {
      const req = { body: { name: loginMock.name, email: loginMock.email, password: '123' } };
      const res = {}

      try {
        await loginController.login(req, res);
      } catch (err) {
        expect(err.message).to.equal('"password" length must be at least 6 characters long');
      }
    });
  });

  describe('When the email is invalid', () => {
    it('Returns error message when no email is inserted', async () => {
      const req = { body: { name: loginMock.name, password: loginMock.password } };
      const res = {}

      try {
        await loginController.login(req, res);
      } catch (err) {
        expect(err.message).to.equal('"email" is required');
      }
    });

    it('Returns error message when the email is invalid', async () => {
      const req = { body: { name: loginMock.name, email: 'test@testcom', password: loginMock.password } };
      const res = {}

      try {
        await loginController.login(req, res);
      } catch (err) {
        expect(err.message).to.equal('"email" must be a valid email');
      }
    });
  });
});