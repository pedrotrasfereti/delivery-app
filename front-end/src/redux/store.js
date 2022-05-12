import { configureStore } from '@reduxjs/toolkit';

// reducers
import checkoutReducer from './reducers';

const store = configureStore({
  reducer: {
    checkout: checkoutReducer,
  },
});

export default store;
