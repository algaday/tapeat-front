import styles from './register-client.module.css'
import { RegisterClientForm } from '@/features/auth/register-client/register-client-form'

export default function RegisterClientPage() {
  return (
    <main className={styles.container}>
      <RegisterClientForm />
    </main>
  )
}
