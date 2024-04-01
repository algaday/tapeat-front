import { LoginForm } from '@/features/auth/login/login-form'
import styles from './login-page.module.css'
export function LoginPage() {
  return (
    <main className={styles.container}>
      <LoginForm />
    </main>
  )
}
