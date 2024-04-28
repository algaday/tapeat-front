import { RHFInputField } from '@/shared/ui/rhf/rhf-input-field'
import { Button, Stack, Typography } from '@mui/material'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { StyledBox, Wrapper } from './add-modification-modal.styles'
import {
  AddModificationSchema,
  ModificationModalProps,
  addModificationSchema,
} from './types'
import { zodResolver } from '@hookform/resolvers/zod'

export function AddModificationModal(props: ModificationModalProps) {
  const methods = useForm<AddModificationSchema>({
    resolver: zodResolver(addModificationSchema),
  })

  const onSubmit: SubmitHandler<AddModificationSchema> = async (data) => {
    props.onModificationSubmit(data)
  }

  return (
    <StyledBox>
      <FormProvider {...methods}>
        <Wrapper onSubmit={methods.handleSubmit(onSubmit)}>
          <Typography variant='h5'>Добавить модификацию</Typography>
          <Stack direction={'row'} spacing={1} marginY={1} marginTop={2}>
            <RHFInputField name='name' label='Названия' />
            <RHFInputField name='price' label='Цена' type='number' />
          </Stack>
          <Stack
            direction='row'
            justifyContent='center'
            marginTop={2}
            spacing={2}
          >
            <Button type='submit' color='success' variant='outlined'>
              Добавить
            </Button>
            <Button
              type='submit'
              color='error'
              variant='outlined'
              onClick={() => props.onModificationClose()}
            >
              Отменить
            </Button>
          </Stack>
        </Wrapper>
      </FormProvider>
    </StyledBox>
  )
}
