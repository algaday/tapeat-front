import { Button } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { useCreateImageMutation } from '@/shared/api/image/image-api'
import { StyledFileInput } from '@/shared/ui/image-upload/image-upload.styles'
import { Image } from '@/shared/api/image/types'

type Props = {
  onChange(image: Image): void
}

export default function InputFileUpload(props: Props) {
  const [createImage] = useCreateImageMutation()

  const onUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const image = await createImage(e.target.files[0]).unwrap()
      props.onChange(image)
    }
  }

  return (
    <Button
      component='label'
      role={undefined}
      variant='contained'
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
      sx={{ margin: '20px 0' }}
    >
      Загрузить изображения
      <StyledFileInput type='file' onChange={onUploadImage} />
    </Button>
  )
}
