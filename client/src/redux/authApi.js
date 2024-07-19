import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath:"authApi",
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:5000/auth',
      prepareHeaders: (headers) => {
        const token = localStorage.getItem('token');
        if (token) {
          headers.set('auth-token', token); // Use 'auth-token' as the header
        }
        return headers;
      },
    }),
   
    endpoints:(builder)=>({
        login:builder.mutation({
            query:(creds)=>({
                url:'/login',
                method:"POST",
                body:creds
            })
        }),
        register:builder.mutation({
            query: (details) => ({
                url: '/register',
                method: 'POST',
                body: details, // Ensure the body is correct
                headers: {
                  'Content-Type': 'application/json',
                },
              })
        }),
        getuser: builder.query({
            query: () => ({
              url: '/getuser',
              method: 'POST',
            }),
          })
    })
})

export const { useLoginMutation ,useRegisterMutation,useGetuserQuery  } = authApi;