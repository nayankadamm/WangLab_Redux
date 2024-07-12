import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const histApiSlice = createApi({
  reducerPath: 'histApi', // Make sure this matches in your store configuration
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }), // Ensure this is the correct base URL
  endpoints: (builder) => ({
    setHist: builder.mutation({
      query: (hist) => ({
        url: '/',
        method: 'POST',
        body: hist, // Ensure the body is correct
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    getHist: builder.query({
      query: () => ({
        url: '/',
        method: 'GET',
      }),
    }),
  }),
});

export const { useSetHistMutation, useGetHistQuery } = histApiSlice; // Ensure these hooks are correctly exported
