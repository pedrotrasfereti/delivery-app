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
    removeProduct: (state, action) => {
      state.products.splice(action.payload, 1);
    },
  },
});

export const {
  addProduct,
  removeProduct,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
