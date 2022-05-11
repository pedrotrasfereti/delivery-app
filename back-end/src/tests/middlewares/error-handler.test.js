const sinon = require("sinon");
const { expect } = require('chai');
const errorHandler = require("../../api/middlewares/error-handler");

describe('Tests errorHandler middleware', () => {
  afterEach(() => {
    sinon.restore();
  })

  describe('When error name is "unauthorized"', () => {
    const err = { name: 'unauthorized', message: 'Unauthorized' };
    const req = {};
    const res = {};
    const next = sinon.stub();
    it('Returns status 401 with an error message', async () => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(null);

      errorHandler(err, req, res, next);
      expect((res.status).calledWith(401)).to.equal(true);
      expect((res.json).calledWith({ message: err.message })).to.equal(true);
    })
  })

  describe('When error name is "bad_request"', () => {
    const err = { name: 'bad_request', message: 'Bad Request' };
    const req = {};
    const res = {};
    const next = sinon.stub();
    it('Returns status 400 with an error message', async () => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(null);

      errorHandler(err, req, res, next);
      expect((res.status).calledWith(400)).to.equal(true);
      expect((res.json).calledWith({ message: err.message })).to.equal(true);
    })
  })

  describe('When error name is "not_found"', () => {
    const err = { name: 'not_found', message: 'Not Found' };
    const req = {};
    const res = {};
    const next = sinon.stub();
    it('Returns status 404 with an error message', async () => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(null);

      errorHandler(err, req, res, next);
      expect((res.status).calledWith(404)).to.equal(true);
      expect((res.json).calledWith({ message: err.message })).to.equal(true);
    })
  })

  describe('When error name is "conflict"', () => {
    const err = { name: 'conflict', message: 'Conflict' };
    const req = {};
    const res = {};
    const next = sinon.stub();
    it('Returns status 409 with an error message', async () => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(null);

      errorHandler(err, req, res, next);
      expect((res.status).calledWith(409)).to.equal(true);
      expect((res.json).calledWith({ message: err.message })).to.equal(true);
    })
  })

  describe('When no error name is passed', () => {
    const err = { message: 'Internal Server Error' };
    const req = {};
    const res = {};
    const next = sinon.stub();
    it('Returns status 500 with default message', async () => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(null);

      errorHandler(err, req, res, next);
      expect((res.status).calledWith(500)).to.equal(true);
      expect((res.json).calledWith({ message: err.message })).to.equal(true);
    })
  })

})