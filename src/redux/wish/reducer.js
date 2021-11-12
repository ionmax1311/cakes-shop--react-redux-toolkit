import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
  name: "wish",
  initialState: {
    itemsInWish: [],
  },
  reducers: {
    setItemInWish: (state, action) => {
      state.itemsInWish.push(action.payload);
    },
    deleteItemFromWish: (state, action) => {
      state.itemsInWish = state.itemsInWish.filter(
        (wish) => wish.id !== action.payload
      );
    },
  },
});

export const { setItemInWish, deleteItemFromWish } = wishSlice.actions;
export default wishSlice.reducer;
