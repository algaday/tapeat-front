import clsx from 'clsx'
import styles from './custom-button.module.css'

type Props = {
  type: 'submit' | 'reset' | 'button'
  children: React.ReactNode
  primary?: boolean
  outline?: boolean
  fullwidth?: boolean
}

export function CustomButton(props: Props) {
  return (
    <button
      {...props}
      className={clsx(styles.btn, {
        [styles.primary]: props.primary,
        [styles.fullwidth]: props.fullwidth,
        [styles.outline]: props.outline,
      })}
    >
      {props.children}
    </button>
  )
}
