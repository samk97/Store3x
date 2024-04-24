import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wish_size: 0,
};

export const wishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    setwishSize: (state, action) => {
      state.wish_size = action.payload.wish_size;
    },
  },
});

export const { setwishSize } = wishSlice.actions;

export default wishSlice.reducer;
