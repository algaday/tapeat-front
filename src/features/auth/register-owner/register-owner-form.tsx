'use client'
import { FormEvent } from 'react'
import { useRegisterOwner } from './api/query'
import styles from './register-owner-form.module.css'
import { InputField } from '@/shared/ui/input-field/input-field'
import { CustomButton } from '@/shared/ui/button/custom-button'

type User = {
  email: string
  password: string
  username: string
  firstName: string
  lastName: string
}

export function RegisterOwnerForm() {
  const { registerOwner } = useRegisterOwner()
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const dataInfo = Object.fromEntries(formData.entries()) as User
    const resp = registerOwner(dataInfo)
  }
  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit}>
        <div className={styles.header}>
          <h3>Register as Owner</h3>
          <p>Welcome &#x1F44B;</p>
        </div>
        <InputField name='email' type='email' label='Email' required />
        <InputField name='password' type='password' label='Password' required />
        <InputField name='username' type='text' label='Username' required />
        <InputField name='firstName' type='text' label='First Name' required />
        <InputField name='lastName' type='text' label='Last Name' required />
        <div>
          <CustomButton type='submit' fullwidth>
            Continue
          </CustomButton>
        </div>
      </form>
    </div>
  )
}
