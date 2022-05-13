import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  total: 0,
  products: {},
};

const formatPrice = (total, val, operation = 'add') => {
  let result = total;

  if (operation === 'add') {
    result = total + val;
  } else if (operation === 'subtract') {
    result = total - val;
  }

  return Math.round((result + Number.EPSILON) * 100) / 100;
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

      state.total = formatPrice(state.total, price);

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
        && state.products[id].quantity > 0
      ) {
        quantity = state.products[id].quantity - 1;
        state.total = formatPrice(state.total, price, 'subtract');
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
