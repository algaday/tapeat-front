import { baseApi } from '@/shared/api'
import { MENU_ITEMS_TAG } from '@/shared/api/tags'

export const createMenuItemApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createMenuItem: build.mutation({
      query: (body) => ({
        url: 'menu/create-menu-item',
        method: 'POST',
        body,
      }),
      invalidatesTags: [MENU_ITEMS_TAG],
    }),
  }),
})

export const { useCreateMenuItemMutation } = createMenuItemApi
