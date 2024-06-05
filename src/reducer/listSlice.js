import { createSlice } from '@reduxjs/toolkit';

export const listSlice = createSlice({
  name: 'list',
  initialState: {
    value: [],
    timestamp: '',
  },
  reducers: {
    listAdd: (state, action) => {
      state.value = [...action.payload];
    },
    timestampAdd: (state, action) => {
      state.timestamp = action.payload;
    }
  },
});

export const { listAdd, timestampAdd } = listSlice.actions;

export default listSlice.reducer;
