import { configureStore } from '@reduxjs/toolkit';
import { countReducer } from './slices/CountSlice';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    count: countReducer
    
  },
});


