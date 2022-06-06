import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  totalPrice: 0,
};

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cart = [];
    },
    removeItem: (state, action) => {
      const targetId = action.payload;

      const updatedCart = state.cart.filter((p) => p.id !== targetId);

      state.cart = updatedCart;
    },
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    updateTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
  },
});

export const {
  clearCart,
  removeItem,
  setCart,
  updateTotalPrice,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
