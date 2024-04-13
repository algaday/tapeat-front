import { z } from 'zod'

export const createMenuItemSchema = z.object({
  name: z.string().min(1, { message: 'Заполните название' }),
  category: z.string().min(1, { message: 'Заполните категорию' }),
  description: z.string().min(1, { message: 'Заполните описание' }),
  imageId: z.string().min(1, { message: 'Загрузите изображение' }),
  price: z.string().min(1, { message: 'Укажите цену' }),
})

export type CreateMenuItemSchema = z.infer<typeof createMenuItemSchema>
