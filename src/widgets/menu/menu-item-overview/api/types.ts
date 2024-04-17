import { z } from 'zod'

export const updateMenuItemSchema = z.object({
  menuItemId: z.string().min(1),
  name: z.string().min(1, { message: 'Заполните название' }),
  category: z.string().min(1, { message: 'Заполните категорию' }),
  description: z.string().min(1, { message: 'Заполните описание' }),
  price: z.string().min(1, { message: 'Укажите цену' }),
  imageId: z.string().min(1, { message: 'Загрузите фотографию' }),
})

export const ResponseMenuItemSchema = z.object({
  id: z.string(),
  category: z.string(),
  description: z.string(),
  nameOfDish: z.string(),
  price: z.string(),
  restaurantId: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  image: z.object({
    imageId: z.string(),
    restaurantId: z.string(),
    originalPath: z.string(),
    mediumThumbnailPath: z.string(),
    smallThumbnailPath: z.string(),
  }),
})

export type ResponseMenuItem = z.infer<typeof ResponseMenuItemSchema>
export type UpdateMenuItemDto = z.infer<typeof updateMenuItemSchema>
