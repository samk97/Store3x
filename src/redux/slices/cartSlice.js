import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart_size: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setcartSize: (state, action) => {
      state.cart_size = action.payload.cart_size;
    },
  },
});

export const { setcartSize } = cartSlice.actions;

export default cartSlice.reducer;
