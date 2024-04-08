// authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { login, signup, logout } from "../../utils/Auth";

const initialState = {
  isLoggedIn: false,
  user: null,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoggedInUser: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      state.error = null;
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { setLoggedInUser, logoutUser, setError, clearError } =
  authSlice.actions;

// Async thunk action for login
export const loginUser = (formData) => async (dispatch) => {
  try {
    const response = await login(formData);
    if (response.success) {
      dispatch(setLoggedInUser(response.user));
    } else {
      dispatch(setError(response.error));
    }
  } catch (error) {
    dispatch(setError("Connection error. Please try again later."));
  }
};

// Async thunk action for signup
export const signupUser = (formData) => async (dispatch) => {
  try {
    const response = await signup(formData);
    if (response.success) {
      dispatch(setLoggedInUser(response.user));
    } else {
      dispatch(setError(response.error));
    }
  } catch (error) {
    dispatch(setError("Connection error. Please try again later."));
  }
};

// Async thunk action for logout
export const logoutUserAsync = () => async (dispatch) => {
  try {
    await logout();
    dispatch(logoutUser());
  } catch (error) {
    console.error("Logout failed:", error);
  }
};

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
