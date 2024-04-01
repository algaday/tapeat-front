import customFetch from '@/shared/api/custom-fetch'
import { useMutation } from '@tanstack/react-query'
import { Client } from './query.type'

export const useRegisterClient = () => {
  const { mutate: registerClient } = useMutation({
    mutationFn: (registerData: Client) => {
      return customFetch.post('??/??', registerData)
    },
    onSuccess: (data) => {
      console.log('Registered')
    },
    onError: (error) => {
      console.log(error)
    },
  })
  return { registerClient }
}
