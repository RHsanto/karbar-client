import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Slice/ProductSlice";
import cartReducer from "./Slice/CartSlice";
import authReducer from "./Slice/AuthSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    auth: authReducer,
  },
});

export default store;
