import { HTMLInputTypeAttribute, useId } from 'react'
import styles from './input-field.module.css'

type Props = {
  type?: HTMLInputTypeAttribute
  name?: HTMLInputTypeAttribute
  label?: string
  required?: boolean
  placeholder?: HTMLInputTypeAttribute
}

export function InputField(props: Props) {
  const id = useId()
  return (
    <>
      <div className={styles.container}>
        {props.label && <label htmlFor={id}>{props.label}</label>}
        <input id={id} {...props} />
        <div className='underline'></div>
      </div>
    </>
  )
}
