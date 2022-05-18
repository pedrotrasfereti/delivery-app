import { configureStore } from '@reduxjs/toolkit';

// reducers
import {
  checkoutReducer,
  ordersReducer,
  productsReducer,
} from './features';

const store = configureStore({
  reducer: {
    checkout: checkoutReducer,
    orders: ordersReducer,
    products: productsReducer,
  },
});

export default store;
