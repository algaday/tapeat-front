import { baseQuery } from '@/shared/api/baseQuery'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQuery,
  tagTypes: ['User'],
  endpoints: (builder) => ({
    logout: builder.mutation<void, void>({
      query: () => ({
        url: 'auth/logout',
        method: 'GET',
      }),
    }),
    registerCustomer: builder.mutation({
      query: (user) => ({
        url: 'auth/signup',
        method: 'POST',
        body: user,
      }),
    }),
    registerOwner: builder.mutation({
      query: (user) => ({
        url: 'restaurant-owner/signup',
        method: 'POST',
        body: user,
      }),
    }),
    login: builder.mutation({
      query: (user) => ({
        url: 'auth/signin',
        method: 'POST',
        body: user,
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useLogoutMutation,
  useRegisterCustomerMutation,
  useRegisterOwnerMutation,
  useLoginMutation,
} = userApi
