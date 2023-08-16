// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  // Other authentication-related state properties
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: state => {
      state.isAuthenticated = true;
    },
    logout: state => {
      state.isAuthenticated = false;
    },
    // Other reducer actions
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
