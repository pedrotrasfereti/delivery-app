require('dotenv').config();

const options = {
  host: process.env.HOSTNAME || process.env.HOST,
  port: process.env.PORT || '3306',
  database: process.env.DB_NAME,
  username: process.env.USER,
  password: process.env.PASSWORD,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
  production: {
    ...options,
  },
};
