import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  total: 0,
  products: {},
};

const calcTotal = (total, price, operation = 'add') => {
  let result = total;

  if (operation === 'add') {
    result = total + price;
  } else if (operation === 'subtract') {
    result = total - price;
  }

  return Math.round((result + Number.EPSILON) * 100) / 100;
};

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    updateProduct: (state, action) => {
      const { id, price, name, quantity } = action.payload;

      if (state.products[id]) {
        state.total = calcTotal(
          state.total,
          state.products[id].quantity * price,
          'subtract',
        );

        state.total = calcTotal(state.total, quantity * price);
      } else {
        state.total = calcTotal(state.total, quantity * price);
      }

      state.products = {
        ...state.products,
        [id]: { quantity, price, name },
      };
    },
  },
});

export const {
  updateProduct,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
