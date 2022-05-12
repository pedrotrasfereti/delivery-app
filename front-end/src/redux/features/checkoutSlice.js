import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: {},
};

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { id, price } = action.payload;

      let quantity = 1;

      if (state.products[id]) {
        quantity = state.products[id].quantity + 1;
      }

      state.products = {
        ...state.products,
        [id]: { quantity, price },
      };
    },
    removeProduct: (state, action) => {
      const { id, price } = action.payload;

      let quantity = 0;

      if (
        state.products[id]
        && state.products[id] > 0
      ) {
        quantity = state.products[id].quantity - 1;
      }

      state.products = {
        ...state.products,
        [id]: { quantity, price },
      };
    },
  },
});

export const {
  addProduct,
  removeProduct,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
