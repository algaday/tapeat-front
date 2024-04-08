import { z } from 'zod'

export const loginFormShema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Must be a valid email' }),
  password: z.string().min(3, { message: 'Must be at least 3 characters' }),
})

export type LoginFormSchema = z.infer<typeof loginFormShema>
