import { USER_TAG, baseApi } from '@/shared/api'

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    logout: build.mutation<void, void>({
      query: () => ({
        url: 'auth/logout',
        method: 'GET',
      }),
      invalidatesTags: [USER_TAG],
    }),
    registerOwner: build.mutation({
      query: (user) => ({
        url: 'restaurant-owner/signup',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: [USER_TAG],
    }),
    login: build.mutation({
      query: (user) => ({
        url: 'auth/signin',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: [USER_TAG],
    }),
  }),
})

export const { useLoginMutation, useLogoutMutation, useRegisterOwnerMutation } =
  userApi
