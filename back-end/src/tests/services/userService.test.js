const { expect } = require("chai");
const sinon = require("sinon");
const salesService = require("../../app/services/salesService");
const salesModel = require("../../app/models/salesModel");
const userModel = require("../../app/models/userModel");
const userService = require("../../app/services/userService");
const { JwtMethods } = require("../../app/utils/JwtMethods");

describe('Tests userService', () => {
  describe('Tests create method', () => {
    const userMock = {
      name: 'testUser',
      email: 'test@email.com',
      password: 'password',
      role: 'customer',
    };

    it('Returns created user', async () => {
      const createStub = sinon.stub(userModel, 'create').resolves(userMock);
      const jwtSignStub = sinon.stub(JwtMethods, 'jwtSign').returns('token');
      const user = await userService.create(userMock);

      sinon.assert.calledWith(createStub, userMock);
      sinon.assert.calledWith(jwtSignStub, { email: userMock.email, role: userMock.role });
      expect(user).to.be.a('object');
      expect(user).to.be.deep.equal({
        name: userMock.name,
        email: userMock.email,
        role: userMock.role,
        token: 'token',
      });
    })
  })
})