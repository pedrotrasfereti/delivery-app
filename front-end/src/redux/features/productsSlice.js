import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

/* Utils */
import LocalStorageMethods from '../../utils/localStorage';

/* Services */
import { getAllProducts } from '../../services/request';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (token) => getAllProducts(token),
);

const initialState = {
  products: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    updateProductQty: (state, action) => {
      const { id, newQty } = action.payload;

      const targetId = state.products.findIndex((p) => p.id === id);

      const products = LocalStorageMethods.getParsedItem('products');

      products[targetId].quantity = newQty;

      LocalStorageMethods.setItem('products', products);

      state.products[targetId].quantity = newQty;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      LocalStorageMethods.setItem('products', action.payload);

      state.products = action.payload;
    });
  },
});

export const { setProducts, updateProductQty } = productsSlice.actions;

export default productsSlice.reducer;
