const { expect } = require('chai');
const sinon = require('sinon');
const { TransportMethods } = require('../../app/utils/Transportmailer');
const { HashPassMethods } = require('../../app/utils/HashPassMethods');
const { Users } = require('../../database/models');
const { userMock } = require('../mocks/Database');
const resetPassModel = require('../../app/models/resetPasswordModel');
const { resetPasswordUserData } = require('../mocks/resetPass');

describe("Testing recover password model", function () {
  let transport;
  beforeEach(function () {
    transport = new TransportMethods();
  });

  afterEach(function () {
    sinon.restore();
  });

  describe("Testing recover method if is a sucess", function () {
    it('resetPassword return User object', async function () {
      const findUserStub = sinon.stub(Users, 'findOne').resolves(userMock);
      const resetPassStub = sinon.stub(Users, 'update').resolves(userMock);

      const resetPass = await resetPassModel.resetPassword(resetPasswordUserData);

      sinon.assert.calledWith(findUserStub, {
          where: { email: resetPasswordUserData.email },
          raw: true,
      },
    );
      sinon.assert.calledWith(resetPassStub, {
          password: HashPassMethods.encryptPass(resetPasswordUserData.newPass),
        }, {
          where: { email: resetPasswordUserData.email },
          raw: true,
        },
      );

        expect(resetPass).to.be.a('object');
        expect(resetPass).to.have.a.property('id');
        expect(resetPass).to.have.a.property('name');
        expect(resetPass).to.have.a.property('email');
    });
  });

  describe("Testing recover method if something is wrong", function () {
    it('resetPassword return null if User is invalid', async function () {
      const findUserStub = sinon.stub(Users, 'findOne').resolves(null);

      const resetPass = await resetPassModel.resetPassword(resetPasswordUserData);

      sinon.assert.calledWith(findUserStub, {
          where: { email: resetPasswordUserData.email },
          raw: true,
      },
    );

      expect(resetPass).to.be.null
    });
  });
});
