import jwt from 'jsonwebtoken';
import * as fs from 'fs';

class JwtMethods {
  static jwtSign(payload) {
    const sign = jwt.sign(payload, JWT_SECRET, {
      expiresIn: '5h',
      algorithm: 'HS256',
    });

    return sign;
  }
};
