const express = require('express');
const cors = require('cors');
const loginRouter = require('./routers/loginRouter');
const userRouter = require('./routers/userRouter');
const productRouter = require('./routers/productRoutes');
const errorHandler = require('./middlewares/error-handler');

const api = express();

// middlewares
api.use(express.json());
api.use(cors());

// routes
api.use('/register', userRouter);
api.use('/login', loginRouter);
api.use('/customer/product', productRouter);

// error middlewares
api.use(errorHandler);

module.exports = api;
