const { expect } = require('chai');
const sinon = require('sinon');
const userModel = require('../../app/models/userModel');
const loginService = require('../../app/services/loginService');
const { HashPassMethods } = require('../../app/utils/HashPassMethods');
const { JwtMethods } = require('../../app/utils/JwtMethods');

describe('Tests loginService', () => {
  const loginMock = {
    email: 'test@email.com',
    password: 'password',
  };

  const returnMock = {
    id: 1,
    name: 'testUser',
    email: loginMock.email,
    role: 'customer',
    password: 'password',
  }

  afterEach(() => {
    sinon.restore();
  });

  describe('When no user is found', () => {
    it('Throws error message', async () => {
      const userStub = sinon.stub(userModel, 'getOne').resolves();
      try {
        await loginService.login(loginMock);
        sinon.assert.calledWith(userStub, loginMock);
      } catch (error) {
        expect(error.message).to.be.equal('Invalid email or password');
      }
    });
  });

  describe('When password is invalid', () => {
    it('Throws error message', async () => {
      sinon.stub(userModel, 'getOne').resolves(returnMock);
      const encryptPassStub = sinon.stub(HashPassMethods, 'encryptPass').returns('encriptedPassword');
      const comparePassStub = sinon.stub(HashPassMethods, 'comparePass').returns(null);

      try {
        await loginService.login(loginMock);
        sinon.assert.calledWith(encryptPassStub, loginMock.password);
        sinon.assert.calledWith(comparePassStub, 'encriptedPassword', returnMock.password);
      } catch (error) {
        expect(error.message).to.be.equal('Invalid email or password');
      }
    });
  })

  describe('When login is successfull', () => {
    it('Returns object with correct fields', async () => {
      const { id, name, email, role } = returnMock;
      sinon.stub(userModel, 'getOne').resolves(returnMock);
      sinon.stub(HashPassMethods, 'encryptPass').returns('encriptedPassword');
      sinon.stub(HashPassMethods, 'comparePass').returns(true);
      const jwtSignStub = sinon.stub(JwtMethods, 'jwtSign').returns('token');

      const user = await loginService.login(loginMock);

      sinon.assert.calledWith(jwtSignStub, { id, email, role });
      expect(user).to.be.a('object');
      expect(user).to.have.property('name');
      expect(user).to.have.property('email');
      expect(user).to.have.property('role');
      expect(user).to.have.property('token');
      expect(user).to.be.deep.equal({ id, name, email, role, token: 'token' });
    })
  })
});