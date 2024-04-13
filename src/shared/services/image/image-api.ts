import { baseApi } from '@/shared/api'
import { CreateImageDto, Image, ImageSchema } from '@/shared/api/image/types'
import { validateResponse } from '@/shared/lib/validate-response'

export const imageApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createImage: build.mutation<Image, CreateImageDto>({
      query: (imageFile) => {
        let bodyFormData = new FormData()
        bodyFormData.append('image', imageFile)
        return {
          url: '/media/upload-image',
          method: 'POST',
          body: bodyFormData,
        }
      },
      transformResponse: validateResponse(ImageSchema),
    }),
  }),
})

export const { useCreateImageMutation } = imageApi
