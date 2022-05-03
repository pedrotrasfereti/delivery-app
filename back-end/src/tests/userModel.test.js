const {
  expect
} = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const {
  Users
} = require('../database/models/');
const userModelApp = require('../app/models/userModel');

describe('Testing user model', () => {
  describe('Testing create method', () => {
    const mockDatabase = {
      id: "5",
      name: "joao",
      email: "jvitor@gmail.com",
      password: "e10adc3949ba59abbe56e057f20f883e",
      role: "customer"
    }
    const mockApp = {
      name: "joao",
      email: "jvitor@gmail.com",
      password: "123456",
    }
    before(() => {
      sinon.stub(Users, "create").resolves(mockDatabase);
    });
    after(() => {
      sinon.restore();
    });
    it("Return the object user created", async () => {
      const user = await userModelApp.create(mockApp);
      expect(user).to.be.a("object");
      expect(user).to.be.equal(mockDatabase);
    })
  })

  describe("Testing findOne method", () => {
    const mockDatabase = {
      id: "5",
      name: "joao",
      email: "jvitor.spaula@gmail.com",
      password: "e10adc3949ba59abbe56e057f20f883e",
      role: "customer"
    }
    const mockApp = {
      email: "jvitor.spaula@gmail.com",
      password: "123456"
    }
    // before(() => {});
    afterEach(() => {
      sinon.restore();
    });
    it("Return one object of database", async () => {
      const findOneStub = sinon.stub(Users, "findOne").resolves(mockDatabase);
      const user = await userModelApp.getOne(mockApp);
      sinon.assert.calledWithMatch(findOneStub, {
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
    it ("If not exists user with email return null", async () => {
      const findOneStub = sinon.stub(Users, "findOne").resolves(null);
      const user = await userModelApp.getOne(mockApp);
      expect(user).to.be.equal(null);
    })
  })
})
