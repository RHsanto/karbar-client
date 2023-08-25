// productSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductsByType = createAsyncThunk("products/fetchProductsByType", async type => {
  const res = await axios.get(`https://dokan-backend.onrender.com/products?type=${type}`);
  return res.data;
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProductsByType.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsByType.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProductsByType.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
