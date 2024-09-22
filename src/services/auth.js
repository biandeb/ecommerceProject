import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_AUTH, URL_AUTH } from '../firebase/database';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: URL_AUTH }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: `accounts:signInWithPassword?key=${API_AUTH}`,
        method: 'POST',
        body: {
          email,
          password,
          returnSecureToken: true
        }
      })
    }),
    register: builder.mutation({
      query: ({ email, password }) => ({
        url: `accounts:signUp?key=${API_AUTH}`,
        method: 'POST',
        body: {
          email,
          password,
          returnSecureToken: true
        }
      })
    })
  })
});

export const { useLoginMutation, useRegisterMutation } = authApi;
