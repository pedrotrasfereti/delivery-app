const jwt =  require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

const jwtPayload = {
  email: 'Tiradentes@maieiou.com',
  role: 'customer',
}

const fakeToken = jwt.sign(jwtPayload, JWT_SECRET, {
  expiresIn: '5h',
  algorithm: 'HS256',
});

module.exports = {
  jwtPayload,
  fakeToken,
}