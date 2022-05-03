//https://axios-http.com/ptbr/docs/instance
const axios = require('axios');

const instanceApi = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_BACKEND_PORT || '3001'}`,
});

const loginRequest = (endpoint, body) => {
  const { data } = await instance.post(endpoint, body);
  return data;
};

export { 
  instanceApi,
  loginRequest,
};