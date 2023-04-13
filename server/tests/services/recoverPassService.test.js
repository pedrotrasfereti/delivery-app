const { expect } = require('chai');
const sinon = require('sinon');
const recoverPassService = require('../../app/services/resetPasswordService');
const recoverPassModel = require('../../app/models/resetPasswordModel');
const { resetPasswordUserData } = require('../mocks/resetPass');

describe('Tests resetPasswordService', function () {
  describe('Tests if resetPassword has any problem', function () {
    it('User does not exist', async function () {
      const recoverPassStub = sinon.stub(recoverPassModel, 'resetPassword').resolves(null);
      const resetPass = await recoverPassService.resetPassword(resetPasswordUserData);

      sinon.assert.calledWith(recoverPassStub, resetPasswordUserData);
      expect(resetPass).to.be.null;
    });
  });
})