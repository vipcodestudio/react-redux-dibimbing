import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCatData = createAsyncThunk('cat/fetchCatData', async () => {
  const res = await axios(
    'https://api.thecatapi.com/v1/images/search?limit=10',
  );
  const data = await res.data;
  return data;
});

const catSlice = createSlice({
  name: 'cat',
  initialState: {
    data: [],
    isLoading: false,
    error: '',
  },
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCatData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCatData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCatData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { setData } = catSlice.actions;
export default catSlice.reducer;
