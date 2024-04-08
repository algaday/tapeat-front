'use client'
import { Button, TextField, Typography } from '@mui/material'
import { FormWrapper } from './login-form.styles'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { useLoginMutation } from '@/shared/api/user/userApi'
import { useRouter } from 'next/navigation'
import { LoginFormSchema, loginFormShema } from '../model/loginFormSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { RHFInputField } from '@/shared/ui/rhf-input-field'

export function LoginForm() {
  // const { register, handleSubmit, reset } = useForm<LoginFormSchema>({
  // resolver: zodResolver(loginFormShema),
  // })
  const methods = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormShema),
  })

  const [login] = useLoginMutation()
  const router = useRouter()

  const onSubmit: SubmitHandler<LoginFormSchema> = async (user) => {
    await login(user)
    router.replace('/dashboard')
  }

  return (
    <FormProvider {...methods}>
      <FormWrapper autoComplete='off' onSubmit={methods.handleSubmit(onSubmit)}>
        <Typography variant='h6' component='h2'>
          Login
        </Typography>
        <RHFInputField name='email' id='email' label='Email' margin='normal' />
        <RHFInputField
          name='password'
          type='password'
          id='password'
          label='Password'
          margin='normal'
        />

        <Button variant='contained' type='submit'>
          Continue
        </Button>
      </FormWrapper>
    </FormProvider>
  )
}
