const jwt =  require('jsonwebtoken');
const { Products } = require('../../database/models');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;
const id = 1;

const jwtPayload = {
  email: 'Tiradentes@maieiou.com',
  role: 'customer',
}

const fakeToken = jwt.sign(jwtPayload, JWT_SECRET, {
  expiresIn: '5h',
  algorithm: 'HS256',
});

const includeOption = [{
  model: Products,
  as: 'products',
  through: {
    attributes: ['quantity'],
    as: 'quantity',
  },
}];

const findOneQuery = {
  where: { id },
  include: [{
    model: Products,
    as: 'products',
    through: {
      attributes: ['quantity'],
      as: 'quantity',
    },
  }],
}

module.exports = {
  jwtPayload,
  fakeToken,
  includeOption,
  findOneQuery,
}