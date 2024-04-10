import { createSlice } from '@reduxjs/toolkit';
import { UserCartItems } from '../../utils/Cart';

// Initial state should be static
const initialState = {
  value: 0, // Initialize with 0 or any other default value
};

export const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    setCount: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCount } = countSlice.actions;

export const countReducer = countSlice.reducer;

// Fetch cart items and update count asynchronously
export const fetchCartCount = () => async (dispatch) => {
  try {
    const data = await UserCartItems();
    dispatch(setCount(data.length));
  } catch (error) {
    console.error('Error fetching cart count:', error);
  }
};
