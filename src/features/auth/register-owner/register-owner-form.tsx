'use client'
import { Button, TextField, Typography } from '@mui/material'
import { FormWrapper } from './register-owner-form.styles'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRegisterOwnerMutation } from '@/entities/user/api/userApi'

type Inputs = {
  email: string
  password: string
  firstName: string
  lastName: string
}

export function RegisterOwnerForm() {
  const { register, handleSubmit, reset } = useForm<Inputs>()
  const [registerOwner] = useRegisterOwnerMutation()
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    registerOwner(data)
    reset()
  }
  return (
    <FormWrapper autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
      <Typography variant='h6' component='h2'>
        Register as Restaurant Owner
      </Typography>
      <TextField
        {...register('email')}
        type='email'
        required
        id='email'
        label='Email'
        margin='normal'
      />
      <TextField
        {...register('password')}
        type='password'
        required
        id='password'
        label='Password'
        margin='normal'
      />
      <TextField
        {...register('firstName')}
        required
        id='firstName'
        label='First Name'
        margin='normal'
      />
      <TextField
        {...register('lastName')}
        required
        id='lastName'
        label='Last Name'
        margin='normal'
      />
      <Button variant='contained' type='submit'>
        Continue
      </Button>
    </FormWrapper>
  )
}
