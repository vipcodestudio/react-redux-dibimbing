import { configureStore } from '@reduxjs/toolkit';
import accountSlice from './slices/accountSlice';
import catSlice from './slices/catSlice';

const store = configureStore({
  reducer: {
    account: accountSlice,
    cat: catSlice,
  },
});

export default store;
