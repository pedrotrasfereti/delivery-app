import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  totalPrice: 0,
};

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    updateCart: (state, action) => {
      state.cart = action.payload;
    },
    updateTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
    removeItem: (state, action) => {
      const targetId = action.payload;

      const updatedCart = state.cart.filter((p) => p.id !== targetId);

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
