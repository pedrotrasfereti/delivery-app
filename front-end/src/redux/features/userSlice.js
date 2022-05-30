import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUser: (state) => {
      state.user = {};
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { clearUser, setUser } = userSlice.actions;

export default userSlice.reducer;
