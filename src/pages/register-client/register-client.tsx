import { Container } from '@mui/material'
import styles from './register-client.module.css'
import { RegisterClientForm } from '@/features/auth/register-client/register-client-form'

export default function RegisterClientPage() {
  return (
    <Container maxWidth='sm'>
      <RegisterClientForm />
    </Container>
  )
}
