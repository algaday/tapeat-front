import { baseApi } from '@/shared/api'
import { MODIFICATION_GROUP_TAG } from '@/shared/api/tags'
import { ModificationGroupDto, ModificationGroupResponse } from './types'

export const modificationGroupApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createModificationGroup: build.mutation<
      ModificationGroupResponse,
      ModificationGroupDto
    >({
      query: (body) => ({
        url: 'modification/create',
        method: 'POST',
        body,
      }),
      invalidatesTags: [MODIFICATION_GROUP_TAG],
    }),

    getAllModificationGroups: build.query<void, void>({
      query: () => `modification/all`,
      providesTags: [MODIFICATION_GROUP_TAG],
    }),

    getModificationGroup: build.query({
      query: (id) => `modification/${id}`,
    }),

    deleteModificationGroup: build.mutation({
      query: (body) => ({
        url: 'modification/delete',
        method: 'DELETE',
        body,
      }),
      invalidatesTags: [MODIFICATION_GROUP_TAG],
    }),
  }),
})

export const {
  useCreateModificationGroupMutation,
  useGetAllModificationGroupsQuery,
  useGetModificationGroupQuery,
  useDeleteModificationGroupMutation,
} = modificationGroupApi
