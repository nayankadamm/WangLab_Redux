import { configureStore } from '@reduxjs/toolkit';
import { histApiSlice } from './redux/HistApi';

export const store = configureStore({
  reducer: {
    [histApiSlice.reducerPath]: histApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(histApiSlice.middleware),
});
