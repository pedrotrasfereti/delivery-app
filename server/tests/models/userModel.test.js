const { expect } = require('chai');
const sinon = require('sinon');
const { Users } = require('../../database/models');
const { createUserPayload } = require('../mocks/Request');
const { userMock } = require('../mocks/Database');

const userModel = require('../../app/models/userModel');
const { HashPassMethods } = require('../../app/utils/HashPassMethods');

describe('Testing user model', function () {
  afterEach(function () {
    sinon.restore();
  });

  describe('Testing create method', function () {
    it('Return the object user created', async function () {
      const encryptPassStub = sinon.stub(HashPassMethods, 'encryptPass').returns('encriptedPassword');
      const createUserStub = sinon.stub(Users, 'create').resolves(userMock);

      const user = await userModel.create(createUserPayload);

      sinon.assert.calledWith(encryptPassStub, createUserPayload.password);
      sinon.assert.calledWith(createUserStub, {
        ...createUserPayload,
        role: 'customer',
        password: 'encriptedPassword',
      });
      expect(user).to.be.a('object');
      expect(user).to.be.equal(userMock);
    });
  });

  describe('Testing getOne method', function () {
    describe('If user exists', function () {
      it('getOne method return user', async function () {
        const findOneStub = sinon.stub(Users, 'findOne').resolves(userMock);
        const user = await userModel.getOne(createUserPayload);
        sinon.assert.calledWith(findOneStub, {
          where: {
            email: createUserPayload.email,
          },
          raw: true,
        });
        expect(user).to.be.a('object');
        expect(user).to.have.a.property('id');
        expect(user).to.have.a.property('name');
        expect(user).to.have.a.property('email');
        expect(user).to.have.a.property('role');
        expect(user).to.be.equal(userMock);
      });
    });
    describe('If user does not exists', function () {
      it('getOne method return null', async function () {
        const findOneStub = sinon.stub(Users, 'findOne').resolves(null);
        const user = await userModel.getOne(createUserPayload);
        sinon.assert.calledWith(findOneStub, { where: { email: createUserPayload.email }, raw: true });
        expect(user).to.be.equal(null);
      });
    });
  });

  describe('Testing getById method', function () {
    it('getById method return user', async function () {
      const findOneStub = sinon.stub(Users, 'findOne').resolves(userMock);
      const user = await userModel.getById(userMock.id);
      sinon.assert.calledWith(findOneStub, {
        where: { id: userMock.id },
        raw: true,
      });

      expect(user).to.be.a('object');
      expect(user).to.have.a.property('id');
      expect(user).to.have.a.property('name');
      expect(user).to.have.a.property('email');
      expect(user).to.have.a.property('role');
      expect(user).to.be.equal(userMock);
    });
  });
});
