const express = require('express');
const loginRouter = require('./routers/loginRouter');
const userRouter = require('./routers/userRouter');
const errorHandler = require('./middlewares/error-handler');

const api = express();

api.use(express.json());

api.use('/login', loginRouter);
api.use('/register', userRouter);

api.use(errorHandler);

module.exports = api;
