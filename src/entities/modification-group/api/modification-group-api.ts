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
        url: 'menu/modification',
        method: 'POST',
        body,
      }),
      invalidatesTags: [MODIFICATION_GROUP_TAG],
    }),
  }),
})

export const { useCreateModificationGroupMutation } = modificationGroupApi
