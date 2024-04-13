import { baseApi } from '@/shared/api'

export const createMenuItemApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createMenuItem: build.mutation({
      query: (body) => ({
        url: 'menu/create-menu-item',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useCreateMenuItemMutation } = createMenuItemApi
