import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/reducer";
import cakesReducer from "./cakes/reducer";
import wishReducer from "./wish/reducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    cakes: cakesReducer,
    wish: wishReducer,
  },
});
