import { RegisterForm } from '@/features/auth/register/register-form'
import styles from './register-owner.module.css'

export default function RegisterOwnerPage() {
  return (
    <main className={styles.container}>
      <RegisterForm />
    </main>
  )
}
