const sinon = require('sinon');
const chai = require('chai');
const jwt = require('jsonwebtoken');
const { JwtMethods } = require('../../app/utils/JwtMethods');
const { HashPassMethods } = require('../../app/utils/HashPassMethods');
const { jwtPayload, fakeToken } = require('../mocks/Utils');
require('dotenv').config();

const { JWT_SECRET } = process.env;

const { expect } = chai;

describe('Testa as funções úteis do backend', function () {
  describe('Testa a JwtMethods', function () {
    afterEach(function () {
      sinon.restore();
    });

    it('Testa se a sign method retorna um token', function () {
      const signStub = sinon.stub(jwt, 'sign').returns('signedToken');

      const signedToken = JwtMethods.jwtSign('token');

      sinon.assert.calledWith(signStub, 'token', JWT_SECRET, { expiresIn: '5h', algorithm: 'HS256' });
      expect(signedToken).to.be.equal('signedToken');
    });
    it('Testa se a verificação do token retorna um objeto', function () {
      const verifyStub = sinon.stub(jwt, 'verify').returns(jwtPayload);
      const verify = JwtMethods.verifyToken(fakeToken);

      sinon.assert.calledWith(verifyStub, fakeToken, JWT_SECRET, {
        algorithms: ['HS256'],
      });
      expect(verify).to.be.an('object');
    });
    it('Testa o método decode', function () {
      const verify = JwtMethods.decodeToken(fakeToken);

      expect(verify).to.be.an('object');
    });
  });

  describe('Testa as funções encrypt', function () {
    it('Se a senha se torna hash', function () {
      const encrypt = HashPassMethods.encryptPass('Marmita');

      expect(encrypt).to.be.a('string');
    });

    it('Se, ao comparar as senhas, retorna true ou false', function () {
      const encrypt = HashPassMethods.encryptPass('Marmita');
      const correctPass = HashPassMethods.comparePass(encrypt, '3f1a8fc06df2574b62dc354596a11551');
      const wrongPass = HashPassMethods.comparePass(encrypt, 'Papoula');

      expect(correctPass).to.be.true;
      expect(wrongPass).to.be.false;
    });
  });
});