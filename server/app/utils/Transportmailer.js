const dotenv = require('dotenv');

dotenv.config();

const nodemailer = require('nodemailer');
const {
  host,
  port,
  user,
  secure,
  cliendId,
  clientSecret,
  refreshToken,
} = require('../mail/config');
const { GoogleAuth } = require('../auth/googleoAuth');

const acessToken = new GoogleAuth().getAcessToken();

class TransportMethods {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        type: 'OAuth2',
        user,
        clientId: cliendId,
        clientSecret,
        refreshToken,
        accessToken: process.env.GMAIL_ACESSTOKEN,
        acessToken,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }

  async runMail(email, html) {
    await this.transporter.sendMail({
      from: 'Deliveree App <appdeliveree@gmail.com>',
      to: email,
      text: 'Deliveree team',
      subject: 'Deliveree - Reset password',
      html,
    });
  }
}

module.exports = { TransportMethods };
