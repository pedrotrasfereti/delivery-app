require('dotenv').config();

// const environment = process.env.NODE_ENV || 'test';

// const suffix = {
//   prod: '',
//   production: '',
//   dev: '-dev',
//   development: '-dev',
//   test: '-test',
// };

const options = {
  host: process.env.HOSTNAME || process.env.MYSQL_HOST || 'us-cdbr-east-05.cleardb.net',
  port: process.env.MYSQL_PORT || '3306',
  // database: 
  //   `${process.env.MYSQL_DB_NAME || 'delivery-app'}${suffix[environment] || suffix.test}`,
  database: 'heroku_505f68b2a2b6b45',
  username: process.env.MYSQL_USER || 'b23dcc0e8f1d81',
  password: process.env.MYSQL_PASSWORD || '21404c14',
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
