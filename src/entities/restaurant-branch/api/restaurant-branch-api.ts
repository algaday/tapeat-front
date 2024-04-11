import { baseApi } from '@/shared/api'
import {
  CreateBranchDto,
  RestaurantBranch,
  restaurantBranchSchema,
} from './types'
import { validateResponse } from '@/shared/lib/validate-response'
import { RESTAURANT_BRANCH_TAG } from '@/shared/api/tags'

export const restaurantBranchApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createBranch: build.mutation<RestaurantBranch, CreateBranchDto>({
      query: (branch) => ({
        url: 'restaurant-branch/create',
        method: 'POST',
        body: branch,
      }),
      transformResponse: validateResponse(restaurantBranchSchema),
      invalidatesTags: [RESTAURANT_BRANCH_TAG],
    }),
    deleteBranch: build.mutation<RestaurantBranch, { branchId: string }>({
      query: (branch) => ({
        url: 'restaurant-branch/branches',
        method: 'DELETE',
        body: branch,
      }),
      invalidatesTags: [RESTAURANT_BRANCH_TAG],
    }),
    getBranches: build.query<RestaurantBranch[], void>({
      query: () => `restaurant-branch/branches`,
      providesTags: [RESTAURANT_BRANCH_TAG],
    }),
  }),
})

export const {
  useCreateBranchMutation,
  useGetBranchesQuery,
  useDeleteBranchMutation,
} = restaurantBranchApi
