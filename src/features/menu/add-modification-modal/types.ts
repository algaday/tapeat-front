import { z } from 'zod'
export type ModificationModalProps = {
  onModificationClose: () => void
  onModificationSubmit: (data: { name: string; price: string }) => void
}

export const addModificationSchema = z.object({
  name: z.string().min(1, { message: 'Добавьте название' }),
  price: z.string().min(1, { message: 'Укажите цену' }),
})

export type AddModificationSchema = z.infer<typeof addModificationSchema>
