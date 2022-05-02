const sinon = require("sinon");
const chai = require("chai");
const JwtMethods = require('..')

const { expect } = chai;

describe('aaa', ()=> {
  it('bb', () => {
    const signToken = JwtMethods.jwtSign({
      email: 'Tiradentes@maieiou.com',
      role: 'admin',
    });
    console.log(signToken);

    expect(signToken).to.be.a('string');
  }); 
});