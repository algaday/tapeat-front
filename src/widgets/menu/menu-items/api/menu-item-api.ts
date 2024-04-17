import { baseApi } from '@/shared/api'
import { MENU_ITEMS_TAG } from '@/shared/api/tags'
import { MenuItemSchema, menuItemSchema } from './types'
import { validateResponse } from '@/shared/lib/validate-response'

export const menuItemApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllMenuItems: build.query<MenuItemSchema[], void>({
      query: () => `menu/menu-items`,
      providesTags: [MENU_ITEMS_TAG],
    }),
  }),
})

export const { useGetAllMenuItemsQuery } = menuItemApi
