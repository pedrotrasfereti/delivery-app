import { configureStore } from '@reduxjs/toolkit';

// reducers
import checkoutReducer from './features';

const store = configureStore({
  reducer: {
    checkout: checkoutReducer,
  },
});

export default store;
