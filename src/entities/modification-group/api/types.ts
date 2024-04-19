import { z } from 'zod'

export const modificationGroupResponse = z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  restaurantId: z.string(),
})

export const modificationGroupDto = z.object({
  modificationGroupName: z.string(),
  modifications: z.array(
    z.object({
      name: z.string(),
      price: z.string(),
    })
  ),
})

export type ModificationGroupResponse = z.infer<
  typeof modificationGroupResponse
>
export type ModificationGroupDto = z.infer<typeof modificationGroupDto>