import { useFormContext } from 'react-hook-form'
import InputFileUpload from '../image-upload/image-upload'
import { Image } from '@/shared/api/image/types'
import { ModifiedImage } from '../image/image'

type Props = {
  name: string
  image: Image
}

export function RHFImageUpdate(props: Props) {
  const {
    setValue,
    formState: { errors },
  } = useFormContext()

  const onImageUploadChange = (image: Image) => {
    setValue(props.name, image.id, { shouldValidate: true })
  }

  return <ModifiedImage image={props.image} onChange={onImageUploadChange} />
}
