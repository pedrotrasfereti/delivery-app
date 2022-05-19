import { createSlice } from '@reduxjs/toolkit';

/* Utils */
import LocalStorageMethods from '../../utils/localStorage';

const initialState = {
  cart: [],
  totalPrice: 0,
};

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    updateCart: (state, action) => {
      LocalStorageMethods.setItem('carrinho', {
        total: state.total,
        products: action.payload,
      });

      state.cart = action.payload;
    },
    updateTotalPrice: (state, action) => {
      LocalStorageMethods.setItem('carrinho', {
        total: action.payload,
        products: state.cart,
      });

      state.totalPrice = action.payload;
    },
    removeItem: (state, action) => {
      const targetId = action.payload;

      const updatedCart = state.cart.filter((p) => p.id !== targetId);

      LocalStorageMethods.setItem('carrinho', {
        total: state.total,
        products: updatedCart,
      });

      state.cart = updatedCart;
    },
  },
});

export const {
  updateCart,
  updateTotalPrice,
  removeItem,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
