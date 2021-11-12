import { createSlice } from "@reduxjs/toolkit";

const cakesSlice = createSlice({
  name: "cakes",
  initialState: {
    currentCake: null,
  },
  reducers: {
    setCurrentCake: (state, action) => {
      state.currentCake = action.payload;
    },
  },
});

export const { setCurrentCake } = cakesSlice.actions;
export default cakesSlice.reducer;
