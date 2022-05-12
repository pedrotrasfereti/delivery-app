import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state) => {
      state.products.pop();
    },
  },
});

export const {
  addProduct,
  removeProduct,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
