import { Button, Stack, Typography } from '@mui/material'
import { StyledModalBox } from './modal.styles'

type Props = {
  text: string
  onDelete: () => void
  onCancel: () => void
}

export function Modal(props: Props) {
  return (
    <StyledModalBox>
      <Typography variant='h5'>{props.text}</Typography>
      <Stack spacing={2} direction='row' margin={4}>
        <Button variant='outlined' color='error' onClick={props.onDelete}>
          Удалить
        </Button>
        <Button variant='outlined' onClick={props.onCancel}>
          Отменить
        </Button>
      </Stack>
    </StyledModalBox>
  )
}
