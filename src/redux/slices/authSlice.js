import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: null,
  user_type: 1,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoggedInUser: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.user_type = action.payload.user_type;
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.user_type = null;
    },
  },
});

export const { setLoggedInUser,logoutUser } = authSlice.actions;

export default authSlice.reducer;
