import { configureStore } from '@reduxjs/toolkit';

/* Reducers */
import {
  checkoutReducer,
  ordersReducer,
  productsReducer,
} from './features';

const store = configureStore({
  reducer: {
    products: productsReducer,
    checkout: checkoutReducer,
    orders: ordersReducer,
  },
});

export default store;
