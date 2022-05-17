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

  return data;
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

export {
  instanceApi,
  loginRequest,
  registerRequest,
  getAllProducts,
  getAllSellers,
  createSale,
};
