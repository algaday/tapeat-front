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
    }),
    updateMenuItem: build.mutation<ResponseMenuItem, UpdateMenuItemDto>({
      query: (body) => ({
        url: 'menu/update-menu-item',
        method: 'POST',
        body,
      }),
      invalidatesTags: [MENU_ITEMS_TAG],
    }),
  }),
})

export const { useGetSingleMenuItemQuery, useUpdateMenuItemMutation } =
  singleMenuItemApi
