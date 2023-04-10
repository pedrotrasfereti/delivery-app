const nodemailer = require('nodemailer');
const { host, port, user, pass } = require('../mail/config');

class TransportMethods {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host,
      port,
      secure: false,
      auth: {
        user,
        pass,
      },
      tls: {
        rejectUnauthorized: false,
      }
    });
  }

  async runMail(text, subject, email) {
    const mailSend = this.transporter.sendMail({
      text,
      subject,
      from: "Deliveree App <appdeliveree@gmail.com>",
      to: email,
    })
  }
}

module.exports = { TransportMethods };
