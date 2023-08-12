// cartSlice.js

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      // Logic to add a product to the cart
      const productToAdd = action.payload;
      const existingProduct = state.find(item => item._id === productToAdd._id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({ ...productToAdd, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      // Logic to remove a product from the cart
      const productIdToRemove = action.payload;
      return state.filter(item => item._id !== productIdToRemove);
    },
    incrementQuantity: (state, action) => {
      // Find the product in the cart by ID and increment its quantity
      const productId = action.payload;
      const product = state.find(item => item._id === productId);
      if (product) {
        product.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      // Find the product in the cart by ID and decrement its quantity
      const productId = action.payload;
      const product = state.find(item => item._id === productId);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
