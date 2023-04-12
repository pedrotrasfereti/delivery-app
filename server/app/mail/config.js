const dotenv = require('dotenv');
dotenv.config();

const {
  DELIVEREE_MAIL,
  GMAIL_CLIENTID,
  GMAIL_CLIENTSECRET,
  GMAIL_REFRESHTOKEN,
} = process.env;

module.exports = {
  host: "smtp.gmail.com",
  port: 465,
  user: DELIVEREE_MAIL,
  secure: true,
  cliendId: GMAIL_CLIENTID,
  clientSecret: GMAIL_CLIENTSECRET,
  refreshToken: GMAIL_REFRESHTOKEN,
};
