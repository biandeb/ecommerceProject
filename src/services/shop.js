import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { URL_FIREBASE } from '../firebase/database'

export const shopApi = createApi({
    reducerPath: 'shopApi',
    baseQuery: fetchBaseQuery({ baseUrl: URL_FIREBASE }),
    endpoints: (builder) => ({
      getCategories: builder.query({
        query: () => '/categories.json',
      }),
    }),
  })

  export const { useGetCategoriesQuery } = shopApi