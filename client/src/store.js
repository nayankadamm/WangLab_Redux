import { configureStore } from '@reduxjs/toolkit';
import { histApiSlice } from './redux/HistApi';
import { authApi } from './redux/authApi';
export const store = configureStore({
  reducer: {
    [histApiSlice.reducerPath]: histApiSlice.reducer,
    [authApi.reducerPath]:authApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(histApiSlice.middleware).concat(authApi.middleware)
});
