require('dotenv').config();

const { DELIVEREE_MAIL, DELIVEREE_PASS } = process.env;

module.exports = {
  host: "smtp.gmail.com",
  port: 587,
  user: DELIVEREE_MAIL,
  pass: DELIVEREE_PASS,
};
