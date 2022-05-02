const jwt =  require('jsonwebtoken');
const fs =  require('fs');
const JWT_SECRET = fs.readFileSync('./jwt.evaluation.key', 'utf-8');

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