const express = require('express');
const cors = require('cors');

const loginRouter = require('./routers/loginRouter');
const userRouter = require('./routers/userRouter');
const salesRouter = require('./routers/salesRouter');
const productRouter = require('./routers/productRoutes');
const errorHandler = require('./middlewares/error-handler');

const api = express();

// middlewares
api.use(express.json());
api.use(cors());

// routes
api.use('/register', userRouter);
api.use('/login', loginRouter);
api.use('/customer/products', productRouter);
api.use('/customer/checkout', salesRouter);

// error middlewares
api.use(errorHandler);

module.exports = api;
