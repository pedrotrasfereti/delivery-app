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
        const resetTotal = calcTotal(
          state.total,
          state.products[id].quantity * price,
          'subtract',
        );

        if (quantity === 0) {
          const updatedProducts = { ...state.products };
          delete updatedProducts[id];

          return {
            total: calcTotal(resetTotal, quantity * price),
            products: updatedProducts,
          };
        }

        return {
          total: calcTotal(resetTotal, quantity * price),
          products: {
            ...state.products,
            [id]: { quantity, price, name },
          },
        };
      }

      return {
        total: calcTotal(state.total, quantity * price),
        products: {
          ...state.products,
          [id]: { quantity, price, name },
        },
      };
    },
  },
});

export const {
  updateProduct,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
