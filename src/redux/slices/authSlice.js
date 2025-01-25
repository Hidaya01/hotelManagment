import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    email: '',
  },
  reducers: {
    login(state, action) {
      state.email = action.payload.email;
    },
    logout(state) {
      state.email = '';
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
