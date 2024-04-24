import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import cartReducer from './slices/cartSlice';
import wishReducer from './slices/wishSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    wish: wishReducer
  },
});

export default store;
