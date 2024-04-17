import {
  Box,
  Button,
  TextField,
  TextFieldProps,
  Typography,
} from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { StyledFileInput, StyledTypography } from './image-upload.styles'
import { useCreateImageMutation } from '@/shared/api/image/image-api'
import { Image } from '@/shared/api/image/types'

type Props = {
  onChange(image: Image): void
  error?: boolean
  helperText?: string
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
    <Box marginY={3}>
      <Button
        component='label'
        role={undefined}
        variant='contained'
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        Загрузить изображения
        <StyledFileInput
          type='file'
          onChange={onUploadImage}
          accept='image/png, image/jpeg'
        />
      </Button>

      <StyledTypography variant='subtitle2' warning={!!props.error}>
        {props.helperText}
      </StyledTypography>
    </Box>
  )
}
