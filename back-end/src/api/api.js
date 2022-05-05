const express = require('express');
const loginRouter = require('./routers/loginRouter');
const userRouter = require('./routers/userRouter');
const customerRouter = require('./routers/customerRouter');
const errorHandler = require('./middlewares/error-handler');

const api = express();

api.use(express.json());

api.use('/register', userRouter);
api.use('/login', loginRouter);
api.use('/customer', customerRouter);

api.use(errorHandler);

module.exports = api;
