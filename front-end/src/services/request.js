// https://axios-http.com/ptbr/docs/instance
const axios = require('axios');

const instanceApi = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_BACKEND_PORT || '3001'}`,
});

const loginRequest = async (body) => {
  const { data } = await instanceApi.post('/login', body);

  return data;
};

const registerRequest = async (body) => {
  const { data } = await instanceApi.post('/register', body);

  return data;
};

export {
  instanceApi,
  loginRequest,
  registerRequest,
};
