const express = require('express');
const cors = require('cors');

const loginRouter = require('./routers/loginRouter');
const userRouter = require('./routers/userRouter');
const customerRouter = require('./routers/customerRouter');
const errorHandler = require('./middlewares/error-handler');
const { validateUserToken } = require('./middlewares/validate-user-token');

const api = express();

// middlewares
api.use(express.json());
api.use(cors());

// routes
api.use('/register', userRouter);
api.use('/login', loginRouter);
api.use('/customer', validateUserToken('customer'), customerRouter);

// error middlewares
api.use(errorHandler);

module.exports = api;
