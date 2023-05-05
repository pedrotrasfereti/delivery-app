const { expect } = require('chai');
const sinon = require('sinon');
const userModel = require('../../app/models/userModel');
const loginService = require('../../app/services/loginService');
const { HashPassMethods } = require('../../app/utils/HashPassMethods');
const { JwtMethods } = require('../../app/utils/JwtMethods');
const { userMock } = require('../mocks/Database');
const { loginUserPayload } = require('../mocks/Request');

describe('Tests loginService', function () {
  afterEach(function () {
    sinon.restore();
  });

  describe('When no user is found', function () {
    it('Throws error message', async function () {
      const userStub = sinon.stub(userModel, 'getOne').resolves();
      try {
        await loginService.login(loginUserPayload);
        sinon.assert.calledWith(userStub, loginUserPayload);
      } catch (error) {
        expect(error.message).to.be.equal('Invalid email or password');
      }
    });
  });

  describe('When password is invalid', function () {
    it('Throws error message', async function () {
      sinon.stub(userModel, 'getOne').resolves(userMock);
      const encryptPassStub = sinon.stub(HashPassMethods, 'encryptPass').returns('encriptedPassword');
      const comparePassStub = sinon.stub(HashPassMethods, 'comparePass').returns(null);

      try {
        await loginService.login(loginUserPayload);
        sinon.assert.calledWith(encryptPassStub, loginUserPayload.password);
        sinon.assert.calledWith(comparePassStub, 'encriptedPassword', userMock.password);
      } catch (error) {
        expect(error.message).to.be.equal('Invalid email or password');
      }
    });
  });

  describe('When login is successfull', function () {
    it('Returns object with correct fields', async function () {
      const { id, name, email, role } = userMock;
      sinon.stub(userModel, 'getOne').resolves(userMock);
      sinon.stub(HashPassMethods, 'encryptPass').returns('encriptedPassword');
      sinon.stub(HashPassMethods, 'comparePass').returns(true);
      const jwtSignStub = sinon.stub(JwtMethods, 'jwtSign').returns('token');

      const user = await loginService.login(loginUserPayload);

      sinon.assert.calledWith(jwtSignStub, { id, email, role });
      expect(user).to.be.a('object');
      expect(user).to.have.property('name');
      expect(user).to.have.property('email');
      expect(user).to.have.property('role');
      expect(user).to.have.property('token');
      expect(user).to.be.deep.equal({ id, name, email, role, token: 'token' });
    });
  });
});