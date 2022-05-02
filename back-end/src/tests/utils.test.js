const sinon = require("sinon");
const chai = require("chai");
const { JwtMethods } = require('../utils/JwtMethods');
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
});