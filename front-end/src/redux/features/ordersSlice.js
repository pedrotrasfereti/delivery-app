import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

/* Services */
import {
  getAllOrders,
  updateOrder,
} from '../../services/request';

export const fetchOrders = createAsyncThunk(
  'orders/fetchOrders',
  async (payload) => getAllOrders(payload.token, payload.role),
);

export const markAsDelivered = createAsyncThunk(
  'orders/markAsDelivered',
  async (payload) => {
    const data = await updateOrder(
      payload.token,
      payload.role,
      payload.orderId,
      { status: 'Entregue' },
    );

    return data;
  },
);

export const markAsDispatched = createAsyncThunk(
  'orders/markAsDispatched',
  async (payload) => {
    const data = await updateOrder(
      payload.token,
      payload.role,
      payload.orderId,
      { status: 'Em Trânsito' },
    );

    return data;
  },
);

export const markAsPreparing = createAsyncThunk(
  'orders/markAsPreparing',
  async (payload) => {
    const data = await updateOrder(
      payload.token,
      payload.role,
      payload.orderId,
      { status: 'Preparando' },
    );

    return data;
  },
);

const initialState = {
  orders: [],
};

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      const data = action.payload;

      const orders = data.map((o) => ({
        ...o,
        products: o.products.map(({ urlImage, ...p }) => {
          const subTotal = Math.round(
            (p.price * p.quantity.quantity + Number.EPSILON) * 100,
          ) / 100;

          return {
            ...p,
            subTotal,
            quantity: p.quantity.quantity,
          };
        }),
      }));

      state.orders = orders;
    });

    builder.addCase(markAsDelivered.fulfilled, (state, action) => {
      const { id: orderId } = action.payload;

      const targetId = state.orders.findIndex((o) => o.id === orderId);

      state.orders[targetId].status = 'Entregue';
    });

    builder.addCase(markAsPreparing.fulfilled, (state, action) => {
      const { id: orderId } = action.payload;

      const targetId = state.orders.findIndex((o) => o.id === orderId);

      state.orders[targetId].status = 'Preparando';
    });

    builder.addCase(markAsDispatched.fulfilled, (state, action) => {
      const { id: orderId } = action.payload;

      const targetId = state.orders.findIndex((o) => o.id === orderId);

      state.orders[targetId].status = 'Em Trânsito';
    });
  },
});

export const { setOrders } = ordersSlice.actions;

export default ordersSlice.reducer;
