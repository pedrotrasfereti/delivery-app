const { expect } = require('chai');
const sinon = require('sinon');
const userController = require('../../app/controllers/userController');
const userService = require('../../app/services/userService');

describe('Tests userController', () => {
  const userMock = {
    name: 'testUser',
    email: 'test@email.com',
    password: 'password',
  };

  afterEach(() => {
    sinon.restore();
  });

  describe('When user fields are correct', () => {
    const req = { body: userMock };
    const res = {};

    it('Return status 200 with the created user', async () => {
      const createUserStub = sinon.stub(userService, 'create').resolves(userMock);
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(null);

      await userController.create(req, res);
      sinon.assert.calledWith(createUserStub, userMock);
      expect((res.status).calledWith(201)).to.equal(true);
      expect((res.json).calledWith(userMock)).to.equal(true);
    });
  });

  describe('When the password is invalid', () => {
    it('Returns error message when no password is inserted', async () => {
      const req = { body: { name: userMock.name, email: userMock.email } };
      const res = {};

      try {
        await userController.create(req, res);
      } catch (err) {
        expect(err.message).to.equal('"password" is required');
      }
    });

    it('Returns error message when the password length is invalid', async () => {
      const req = { body: { name: userMock.name, email: userMock.email, password: '123' } };
      const res = {};

      try {
        await userController.create(req, res);
      } catch (err) {
        expect(err.message).to.equal('"password" length must be at least 6 characters long');
      }
    });
  });

  describe('When the email is invalid', () => {
    it('Returns error message when no email is inserted', async () => {
      const req = { body: { name: userMock.name, password: userMock.password } };
      const res = {};

      try {
        await userController.create(req, res);
      } catch (err) {
        expect(err.message).to.equal('"email" is required');
      }
    });

    it('Returns error message when the email is invalid', async () => {
      const req = { body: { name: userMock.name, email: 'test@testcom', password: userMock.password } };
      const res = {};

      try {
        await userController.create(req, res);
      } catch (err) {
        expect(err.message).to.equal('"email" must be a valid email');
      }
    });
  });

  describe('When the name is invalid', () => {
    it('Returns error message when no name is inserted', async () => {
      const req = { body: { email: userMock.email, password: userMock.password } };
      const res = {};

      try {
        await userController.create(req, res);
      } catch (err) {
        expect(err.message).to.equal('"name" is required');
      }
    });

    it('Returns error message when the name length is invalid', async () => {
      const req = { body: { name: '12', email: userMock.email, password: userMock.password } };
      const res = {};

      try {
        await userController.create(req, res);
      } catch (err) {
        expect(err.message).to.equal('"name" length must be at least 3 characters long');
      }
    });
  });
});
