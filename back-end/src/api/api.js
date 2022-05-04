const express = require('express');
const loginRouter = require('./routers/loginRouter');
const userRouter = require('./routers/userRouter');
const productRouter = require('./routers/productRoutes');
const errorHandler = require('./middlewares/error-handler');
const salesRouter = require('./routers/salesRouter');

const api = express();

api.use(express.json());

api.use('/register', userRouter);
api.use('/login', loginRouter);
api.use('/customer/product', productRouter);
api.use('/customer/checkout', salesRouter)

api.use(errorHandler);

module.exports = api;
