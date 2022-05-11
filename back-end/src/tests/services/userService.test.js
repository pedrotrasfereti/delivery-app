const { expect } = require("chai");
const sinon = require("sinon");
const userModel = require("../../app/models/userModel");
const userService = require("../../app/services/userService");
const { JwtMethods } = require("../../app/utils/JwtMethods");
const { userMock } = require("../mocks/Database");

describe('Tests userService', () => {
  describe('Tests create method', () => {
    afterEach(() => {
      sinon.restore();
    })

    describe('When user already exist', () => {
      it('Should throw error message "User already Exist', async () => {
        const errorStub = sinon.stub(userModel, "create").rejects(new Error());
        try {
          await userService.create(userMock)
          sinon.assert.calledWith(errorStub, userMock);
        } catch (error) {
          expect(error.message).to.equal("User already exist");
          expect(error.name).to.equal("conflict");
        }
      })
    })

    describe('When user does not exist', () => {
      it('Returns created user', async () => {
        const { id, role, email } = userMock;
        const createStub = sinon.stub(userModel, 'create').resolves(userMock);
        const jwtSignStub = sinon.stub(JwtMethods, 'jwtSign').returns('token');
        const user = await userService.create(userMock);

        sinon.assert.calledWith(createStub, userMock);
        sinon.assert.calledWith(jwtSignStub, { id, email, role });
        expect(user).to.be.a('object');
        expect(user).to.be.deep.equal({
          ...userMock,
          token: 'token',
        });
      })
    })
  })
})