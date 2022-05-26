// https://axios-http.com/ptbr/docs/instance
const axios = require('axios');

const instanceApi = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_BACKEND_PORT || '3001'}`,
});

const authenticateUser = (token) => {
  instanceApi.defaults.headers.common.Authorization = token;
};

const loginRequest = async (body) => {
  const { data } = await instanceApi.post('/login', body);

  return data;
};

const registerRequest = async (body) => {
  const { data } = await instanceApi.post('/register', body);

  return data;
};

const getAllProducts = async (token) => {
  authenticateUser(token);

  const { data } = await instanceApi.get('/customer/products');

  const products = data.map((product) => ({
    ...product,
    quantity: 0,
  }));

  return products;
};

const getAllSellers = async (token) => {
  authenticateUser(token);

  const { data } = await instanceApi.get('/register');

  return data;
};

const createSale = async (token, body) => {
  authenticateUser(token);

  const { data } = await instanceApi.post('/customer/checkout', body);

  return data;
};

const getAllOrders = async (token, role) => {
  authenticateUser(token);

  const { data } = await instanceApi.get(`/${role}/orders`);

  return data;
};

const updateOrder = async (token, role, orderId, body) => {
  authenticateUser(token);

  const { data } = await instanceApi
    .patch(`${role}/orders/${orderId}`, body);

  return data;
};

export {
  createSale,
  getAllOrders,
  getAllProducts,
  getAllSellers,
  instanceApi,
  loginRequest,
  registerRequest,
  updateOrder,
};
