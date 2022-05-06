const { expect } = require('chai');
const sinon = require('sinon');
const { Users } = require('../../database/models/');

const userModel = require('../../app/models/userModel');
const { HashPassMethods } = require('../../app/utils/HashPassMethods');

describe('Testing user model', () => {
  const mockDatabase = {
    id: "5",
    name: "joao",
    email: "jvitor@gmail.com",
    password: "e10adc3949ba59abbe56e057f20f883e",
    role: "customer"
  }
  const mockUser = {
    name: "joao",
    email: "jvitor@gmail.com",
    password: "123456",
  }

  afterEach(() => {
    sinon.restore();
  });

  describe('Testing create method', () => {
    it("Return the object user created", async () => {
      const encryptPassStub = sinon.stub(HashPassMethods, 'encryptPass').returns('encriptedPassword');
      const createUserStub = sinon.stub(Users, "create").resolves(mockDatabase);

      const user = await userModel.create(mockUser);

      sinon.assert.calledWith(encryptPassStub, mockUser.password);
      sinon.assert.calledWith(createUserStub, {
        ...mockUser,
        role: 'customer',
        password: 'encriptedPassword',
      })
      expect(user).to.be.a("object");
      expect(user).to.be.equal(mockDatabase);
    })
  })

  describe("Testing getOne method", () => {
    describe('If user exists', () => {
      it("getOne method return user", async () => {
        const findOneStub = sinon.stub(Users, "findOne").resolves(mockDatabase);
        const user = await userModel.getOne(mockUser);
        sinon.assert.calledWith(findOneStub, {
          where: {
            email: mockDatabase.email,
          },
          raw: true
        });
        expect(user).to.be.a("object");
        expect(user).to.have.a.property("id");
        expect(user).to.have.a.property("name");
        expect(user).to.have.a.property("email");
        expect(user).to.have.a.property("role");
        expect(user).to.be.equal(mockDatabase);
      });
    })
    describe('If user does not exists', () => {
      it("getOne method return null", async () => {
        const findOneStub = sinon.stub(Users, "findOne").resolves(null);
        const user = await userModel.getOne(mockUser);
        sinon.assert.calledWith(findOneStub, { where: { email: mockUser.email }, raw: true });
        expect(user).to.be.equal(null);
      })
    })
  })
})
