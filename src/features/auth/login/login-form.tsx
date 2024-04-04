'use client'
import { Button, TextField, Typography } from '@mui/material'
import { FormWrapper } from './login-form.styles'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useLoginMutation } from '@/entities/user/api/userApi'
import { useRouter } from 'next/navigation'

type Inputs = {
  email: string
  password: string
}

export function LoginForm() {
  const { register, handleSubmit, reset } = useForm<Inputs>()
  const [login] = useLoginMutation()
  const router = useRouter()
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await login(data)

    reset()
    // router.refresh()
  }
  return (
    <FormWrapper autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
      <Typography variant='h6' component='h2'>
        Login
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

      <Button variant='contained' type='submit'>
        Continue
      </Button>
    </FormWrapper>
  )
}
