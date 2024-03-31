import customFetch from '@/shared/api/custom-fetch'
import { useMutation } from '@tanstack/react-query'
import { User } from './query.type'

export const useRegisterOwner = () => {
  const { mutate: registerOwner } = useMutation({
    mutationFn: (registerData: User) => {
      return customFetch.post('restaurant-owner/signup', registerData)
    },
    onSuccess: (data) => {
      console.log('Registered')
    },
    onError: (error) => {
      console.log(error)
    },
  })
  return { registerOwner }
}
