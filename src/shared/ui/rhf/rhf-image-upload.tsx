import { useFormContext } from 'react-hook-form'
import InputFileUpload from '../image-upload/image-upload'
import { Image } from '@/shared/api/image/types'

type Props = {
  name: string
}

export function RHFImageUpload(props: Props) {
  const {
    setValue,
    formState: { errors },
  } = useFormContext()

  const onImageUploadChange = (image: Image) => {
    setValue(props.name, image.id, { shouldValidate: true })
  }

  return (
    <InputFileUpload
      onChange={onImageUploadChange}
      error={errors[props.name] ? true : false}
      helperText={errors ? 'Загрузите фото' : ''}
    />
  )
}
