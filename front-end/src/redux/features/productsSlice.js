import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      const products = action.payload.map((p) => ({ ...p, quantity: 0 }));

      state.products = products;
    },
    updateProductQty: (state, action) => {
      const { id, newQty } = action.payload;

      const targetId = state.products.findIndex((p) => p.id === id);

      state.products[targetId].quantity = newQty;
    },
  },
});

export const { setProducts, updateProductQty } = productsSlice.actions;

export default productsSlice.reducer;
