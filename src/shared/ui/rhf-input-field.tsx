import { TextField, TextFieldProps } from '@mui/material'
import { useFormContext } from 'react-hook-form'

type Props = TextFieldProps & {
  name: string
}

export function RHFInputField(props: Props) {
  const { name } = props
  const {
    register,
    formState: { errors },
  } = useFormContext()

  console.log(errors)

  return (
    <TextField
      {...props}
      {...register(name)}
      error={!!errors[name]}
      helperText={errors[name]?.message as string}
    />
  )
}
