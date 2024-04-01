import { InputField } from '@/shared/ui/input-field/input-field'
import styles from './login-form.module.css'
import { CustomButton } from '@/shared/ui/button/custom-button'
export function LoginForm() {
  return (
    <div className={styles.container}>
      <form>
        <div>
          <h3>Sign-in</h3>
          <p>Welcome &#x1F44B;</p>
        </div>
        <InputField name='email' type='email' label='Email' required />
        <InputField name='password' type='password' label='Password' required />
        <div>
          <CustomButton type='submit' fullwidth>
            Continue
          </CustomButton>
        </div>
      </form>
    </div>
  )
}
