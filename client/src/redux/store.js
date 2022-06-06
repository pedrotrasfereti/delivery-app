import { configureStore } from '@reduxjs/toolkit';

/* Reducers */
import {
  checkoutReducer,
  ordersReducer,
  productsReducer,
  userReducer,
} from './features';

const store = configureStore({
  reducer: {
    products: productsReducer,
    checkout: checkoutReducer,
    orders: ordersReducer,
    user: userReducer,
  },
});

export default store;
