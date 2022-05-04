const sinon = require("sinon");
const chai = require("chai");
const { JwtMethods } = require('../app/utils/JwtMethods');
const { HashPassMethods } = require('../app/utils/HashPassMethods');
const { jwtPayload, fakeToken } = require("./mocks/Utils");

const { expect } = chai;

describe('Testa as funções úteis do backend', () => {
  describe('Testa a JwtMethods', () => {
    it('Testa se a sign method retorna um token', () => {
      const signToken = JwtMethods.jwtSign(jwtPayload);
  
      expect(signToken).to.be.a('string');
    });
    it('Testa se a verificação do token retorna um objeto', () => {
      const verify = JwtMethods.verifyToken(fakeToken);

      expect(verify).to.be.an('object');
    });
    it('Testa o método decode', () => {
      const verify = JwtMethods.decodeToken(fakeToken);

      expect(verify).to.be.an('object');
    });
  });
  describe('Testa as funções encrypt', () => {
    it('Se a senha se torna hash', () => {
      const encrypt = HashPassMethods.encryptPass('Marmita');
  
      expect(encrypt).to.be.a('string');
    });

    it('Se, ao comparar as senhas, retorna true ou false', () => {
      const encrypt = HashPassMethods.encryptPass('Marmita');
      const correctPass = HashPassMethods.comparePass(encrypt, '3f1a8fc06df2574b62dc354596a11551');
      const wrongPass = HashPassMethods.comparePass(encrypt, 'Papoula');

      expect(correctPass).to.be.true;
      expect(wrongPass).to.be.false;
    });
  });
});