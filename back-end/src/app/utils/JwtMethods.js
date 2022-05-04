const jwt = require('jsonwebtoken');
const fs = require('fs');

const JWT_SECRET = fs.readFileSync('./jwt.evaluation.key', 'utf-8');

class JwtMethods {
  static jwtSign(payload) {
    const sign = jwt.sign(payload, JWT_SECRET, {
      expiresIn: '5h',
      algorithm: 'HS256',
    });

    return sign;
  }

  static verifyToken(token) {
    const verifying = jwt.verify(token, JWT_SECRET, { algorithms: ['HS256'] });

    return verifying;
  }

  static decodeToken(token) {
    const decode = jwt.decode(token);

    return decode;
  }
}

module.exports = { JwtMethods };
