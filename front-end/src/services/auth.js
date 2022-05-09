import { instanceApi } from "./request";

const authenticateUser = (token) => {
  instanceApi.defaults.headers.common['Authorization'] = token;
};

export {
  authenticateUser,
};
