import { RegisterForm } from '@/features/auth/register/register-form'
import styles from './register-client.module.css'

export default function RegisterClientPage() {
  return (
    <main className={styles.container}>
      <RegisterForm />
    </main>
  )
}
