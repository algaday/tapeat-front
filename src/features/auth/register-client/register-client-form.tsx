'use client'
import { FormEvent } from 'react'
import { useRegisterClient } from './api/query'
import styles from './register-client-form.module.css'
import { InputField } from '@/shared/ui/input-field/input-field'
import { CustomButton } from '@/shared/ui/button/custom-button'
import { Client } from './api/query.type'

export function RegisterClientForm() {
  const { registerClient } = useRegisterClient()

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const dataInfo = Object.fromEntries(formData.entries())
  }
  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit}>
        <div className={styles.header}>
          <h3>Register as Client</h3>
          <p>Welcome &#x1F44B;</p>
        </div>
        <InputField name='name' type='text' label='Name' required />
        <InputField name='phone' type='tel' label='Phone number' required />
        <div>
          <CustomButton type='submit' fullwidth>
            Continue
          </CustomButton>
        </div>
      </form>
    </div>
  )
}
