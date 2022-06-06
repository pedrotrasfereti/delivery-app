const express = require('express');
const cors = require('cors');

const path = require('path');
const loginRouter = require('./routers/loginRouter');
const userRouter = require('./routers/userRouter');
const customerRouter = require('./routers/customerRouter');
const errorHandler = require('./middlewares/error-handler');
const sellerRouter = require('./routers/sellerRouter');
const { validateUserToken } = require('./middlewares/validate-user-token');

const api = express();

// middlewares
api.use(cors());
api.use(express.json());
api.use('/images', express.static(path.join(__dirname, '../../public')));

// routes
api.get('/', (_req, res) => res.send('Delivery App API!'));
api.use('/register', userRouter);
api.use('/login', loginRouter);
api.use('/customer', validateUserToken('customer'), customerRouter);
api.use('/seller', validateUserToken('seller'), sellerRouter);

// error middlewares
api.use(errorHandler);

module.exports = api;
