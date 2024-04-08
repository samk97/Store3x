import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 1,
}

export const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    setCount: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setCount } = countSlice.actions

export const countReducer = countSlice.reducer;

