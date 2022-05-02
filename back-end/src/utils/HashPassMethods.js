// https://gist.github.com/kitek/1579117
const crypto = require('crypto');


class HashPassMethods {
  static encryptPass(password) {
    const encrypt = crypto.createHash('md5').update(password).digest('hex');

    return encrypt;
  }

  static comparePass(password, dbPassword) {
    const compare = password === dbPassword ? true : false;

    return compare;
  }
}

module.exports = { HashPassMethods };