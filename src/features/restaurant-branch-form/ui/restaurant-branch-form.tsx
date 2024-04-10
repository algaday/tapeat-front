import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { Wrapper } from './restaurant-branch-form.styles'
import { Button, Typography } from '@mui/material'
import { RHFInputField } from '@/shared/ui/rhf-input-field'
import { CreateBranchSchema, createBranchSchema } from '../model'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCreateBranchMutation } from '@/entities/restaurant-branch/api'

export function RestaurantBranchForm() {
  const [createBranch] = useCreateBranchMutation()

  const methods = useForm<CreateBranchSchema>({
    resolver: zodResolver(createBranchSchema),
  })

  const onSubmit: SubmitHandler<CreateBranchSchema> = (address) => {
    console.log(address)
    createBranch(address)
  }
  return (
    <FormProvider {...methods}>
      <Wrapper onSubmit={methods.handleSubmit(onSubmit)}>
        <Typography variant='h6' component='h2'>
          Создать филиал для ресторана
        </Typography>
        <RHFInputField
          name='address'
          id='address'
          label='Адрес'
          margin='normal'
        />
        <Button variant='contained' type='submit'>
          Создать
        </Button>
      </Wrapper>
    </FormProvider>
  )
}
