import { baseApi } from '@/shared/api'
import {
  CreateBranchDto,
  RestaurantBranch,
  restaurantBranchSchema,
} from './types'
import { validateResponse } from '@/shared/lib/validate-response'

export const restaurantBranchApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createBranch: build.mutation<RestaurantBranch, CreateBranchDto>({
      query: (branch) => ({
        url: 'restaurant-branch/create',
        method: 'POST',
        body: branch,
      }),
      transformResponse: validateResponse(restaurantBranchSchema),
    }),
  }),
})

export const { useCreateBranchMutation } = restaurantBranchApi
