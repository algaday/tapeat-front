import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from './baseQuery'
import { USER_TAG } from './tags'

export const baseApi = createApi({
  tagTypes: [USER_TAG],
  reducerPath: 'api',
  baseQuery,
  endpoints: () => ({}),
})
