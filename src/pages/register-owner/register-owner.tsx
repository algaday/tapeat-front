import { RegisterOwnerForm } from '@/features/auth/register-owner/ui/register-owner-form'
import styles from './register-owner.module.css'

export default function RegisterOwnerPage() {
  return (
    <main className={styles.container}>
      <RegisterOwnerForm />
    </main>
  )
}
