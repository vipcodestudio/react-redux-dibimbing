import { createSlice } from '@reduxjs/toolkit';

const catSlice = createSlice({
  name: 'cat',
  initialState: {
    data: [],
  },
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setData } = catSlice.actions;
export default catSlice.reducer;
