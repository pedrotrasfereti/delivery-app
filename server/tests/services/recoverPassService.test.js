const { expect } = require('chai');
const sinon = require('sinon');
const recoverPassService = require('../../app/services/resetPasswordService');
const recoverPassModel = require('../../app/models/resetPasswordModel');
const { JwtMethods } = require('../../app/utils/JwtMethods');
const { resetPasswordUserData, resetPassWithoutEmail } = require('../mocks/resetPass');
const { userMock } = require('../mocks/Database');

describe('Tests resetPasswordService', function () {
  describe('Tests if resetPassword has any problem', function () {
    let token;
    afterEach(function () {
      sinon.restore();
    });

    beforeEach(function () {
      token = sinon.stub(JwtMethods, 'jwtResetPass').returns('token');
    });

    it('User does not exist', async function () {
      const jwtStub = sinon.stub(JwtMethods, 'verifyToken').returns(true);
      const recoverPassModelStub = sinon.stub(recoverPassModel, 'resetPassword').resolves(null);
      const resetPass = await recoverPassService.resetPassword({
        ...resetPasswordUserData,
        token,
      });
      
      sinon.assert.calledWith(jwtStub, token);
      sinon.assert.calledWith(recoverPassModelStub, {...resetPasswordUserData});
      expect(resetPass).to.be.null;
    });

    it('User token is expired', async function () {
      const jwtStub = sinon.stub(JwtMethods, 'verifyToken').returns(false);

      try {
         await recoverPassService.resetPassword({
          ...resetPasswordUserData,
          token,
        });
        sinon.assert.calledWith(jwtStub, token);
      } catch (error) {
        expect(error.message).equal('Token invalid or expired');
      }
    });

    it('User does not have a token', async function () {
      const jwtStub = sinon.stub(JwtMethods, 'verifyToken').returns(false);

      try {
        await recoverPassService.resetPassword(resetPasswordUserData);
        sinon.assert.calledWith(jwtStub, '');
      } catch (error) {
        expect(error.message).equal('Token not found');
      }
    });
  });

  describe('Tests if resetPassword flows smoothly', function () {
    let token;
    afterEach(function () {
      sinon.restore();
    });

    beforeEach(function () {
      token = sinon.stub(JwtMethods, 'jwtResetPass').returns('token');
    });

    it('resetPassword returns ok', async function () {
      const recoverPassStub = sinon.stub(recoverPassModel, 'resetPassword').resolves(userMock);
      const jwtStub = sinon.stub(JwtMethods, 'verifyToken').returns(true);

      const resetPass = await recoverPassService.resetPassword({
        ...resetPasswordUserData,
        token,
      });

      sinon.assert.calledWith(jwtStub, token);
      sinon.assert.calledWith(recoverPassStub, resetPasswordUserData);

      expect(resetPass).to.be.a('object');
      expect(resetPass).to.have.a.property('id');
      expect(resetPass).to.have.a.property('name');
      expect(resetPass).to.have.a.property('email');
    });
  });
});