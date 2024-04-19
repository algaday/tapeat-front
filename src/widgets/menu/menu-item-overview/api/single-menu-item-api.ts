import { baseApi } from '@/shared/api'
import { Image } from '@/shared/api/image/types'
import { MENU_ITEMS_TAG } from '@/shared/api/tags'
import { ResponseMenuItem, UpdateMenuItemDto } from './types'

export const singleMenuItemApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSingleMenuItem: build.query({
      query: (id) => {
        return `menu/menu-item-info/${id}`
      },
      providesTags: [MENU_ITEMS_TAG],
    }),

    updateMenuItem: build.mutation<ResponseMenuItem, UpdateMenuItemDto>({
      query: (body) => ({
        url: 'menu/update-menu-item',
        method: 'POST',
        body,
      }),
      invalidatesTags: [MENU_ITEMS_TAG],
    }),

    deletMenuItem: build.mutation({
      query: (body) => ({
        url: 'menu/delete-menu-item',
        method: 'DELETE',
        body,
      }),
      invalidatesTags: [MENU_ITEMS_TAG],
    }),
  }),
})

export const {
  useGetSingleMenuItemQuery,
  useUpdateMenuItemMutation,
  useDeletMenuItemMutation,
} = singleMenuItemApi
