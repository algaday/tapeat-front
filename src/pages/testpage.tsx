'use client'

import { useForm } from 'react-hook-form'

export function TestPage() {
  const { register, handleSubmit } = useForm()

  return (
    <form>
      <input {...register('firstName')} />
      <select {...register('gender')}>
        <option value='female'>female</option>
        <option value='male'>male</option>
        <option value='other'>other</option>
      </select>
      <input type='submit' />
    </form>
  )
}
