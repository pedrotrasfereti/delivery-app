const { expect } = require('chai');
const sinon = require('sinon');
const userController = require('../../app/controllers/userController');
const userService = require('../../app/services/userService');
const { createUserPayload } = require('../mocks/Request');

describe('Tests userController', () => {
  afterEach(() => {
    sinon.restore();
  });

  describe('When user fields are correct', () => {
    const req = { body: createUserPayload };
    const res = {}

    it('Return status 200 with the created user', async () => {
      const createUserStub = sinon.stub(userService, 'create').resolves(createUserPayload);
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(null);

      await userController.create(req, res);
      sinon.assert.calledWith(createUserStub, createUserPayload);
      expect((res.status).calledWith(201)).to.equal(true);
      expect((res.json).calledWith(createUserPayload)).to.equal(true);
    });
  });

  describe('When the password is invalid', () => {
    it('Returns error message when no password is inserted', async () => {
      const req = { body: { name: createUserPayload.name, email: createUserPayload.email } };
      const res = {}

      try {
        await userController.create(req, res);
      } catch (err) {
        expect(err.message).to.equal('"password" is required');
      }
    });

    it('Returns error message when the password length is invalid', async () => {
      const req = { body: { name: createUserPayload.name, email: createUserPayload.email, password: '123' } };
      const res = {}

      try {
        await userController.create(req, res);
      } catch (err) {
        expect(err.message).to.equal('"password" length must be at least 6 characters long');
      }
    })
  })

  describe('When the email is invalid', () => {
    it('Returns error message when no email is inserted', async () => {
      const req = { body: { name: createUserPayload.name, password: createUserPayload.password } };
      const res = {}

      try {
        await userController.create(req, res);
      } catch (err) {
        expect(err.message).to.equal('"email" is required');
      }
    });

    it('Returns error message when the email is invalid', async () => {
      const req = { body: { name: createUserPayload.name, email: 'test@testcom', password: createUserPayload.password } };
      const res = {}

      try {
        await userController.create(req, res);
      } catch (err) {
        expect(err.message).to.equal('"email" must be a valid email');
      }
    })
  })

  describe('When the name is invalid', () => {
    it('Returns error message when no name is inserted', async () => {
      const req = { body: { email: createUserPayload.email, password: createUserPayload.password } };
      const res = {}

      try {
        await userController.create(req, res);
      } catch (err) {
        expect(err.message).to.equal('"name" is required');
      }
    });

    it('Returns error message when the name length is invalid', async () => {
      const req = { body: { name: '12', email: createUserPayload.email, password: createUserPayload.password } };
      const res = {}

      try {
        await userController.create(req, res);
      } catch (err) {
        expect(err.message).to.equal('"name" length must be at least 3 characters long');
      }
    })
  })
});