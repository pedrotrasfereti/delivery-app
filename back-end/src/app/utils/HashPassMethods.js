// https://gist.github.com/kitek/1579117
const crypto = require('crypto');

// class HashPassMethods {
  function encryptPass(password) {
    const encrypt = crypto.createHash('md5').update(password).digest('hex');

    return encrypt;
  }

  function comparePass(password, dbPassword) {
    return password === dbPassword || false;
  }
// }

module.exports = { encryptPass, comparePass };
