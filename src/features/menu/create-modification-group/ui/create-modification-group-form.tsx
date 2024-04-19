'use client'
import { RHFInputField } from '@/shared/ui/rhf/rhf-input-field'
import { Wrapper } from './create-modification-group-form.styles'
import {
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from 'react-hook-form'
import { Button, IconButton, Stack, Typography } from '@mui/material'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  CreateModificationGroupSchema,
  createModificationGroupSchema,
} from '../model/type'
import { useCreateModificationGroupMutation } from '@/entities/modification-group/api/modification-group-api'

export function CreateModificationGroupForm() {
  const [createModificationGroup] = useCreateModificationGroupMutation()

  const methods = useForm<CreateModificationGroupSchema>({
    defaultValues: {
      modifications: [{ name: '', price: '' }],
    },
    resolver: zodResolver(createModificationGroupSchema),
  })

  const { fields, append, remove } = useFieldArray({
    control: methods.control,
    name: 'modifications',
  })

  const onSubmit: SubmitHandler<CreateModificationGroupSchema> = (data) => {
    createModificationGroup(data)
  }

  const addModification = () => {
    append({ name: '', price: '' })
  }

  const removeModification = (index: number) => {
    remove(index)
  }

  return (
    <FormProvider {...methods}>
      <Wrapper onSubmit={methods.handleSubmit(onSubmit)}>
        <Typography variant='h6' component='h2'>
          Создать группу модификации
        </Typography>
        <RHFInputField
          name='modificationGroupName'
          id='modificationGroupName'
          label='Название группы модификации'
          margin='normal'
        />

        {fields.map((field, index) => (
          <Stack direction={'row'} spacing={1} key={field.id} marginY={1}>
            <RHFInputField
              name={`modifications.${index}.name`}
              label='Названия'
            />
            <RHFInputField
              name={`modifications.${index}.price`}
              label='Цена'
              type='number'
            />
            <IconButton onClick={() => removeModification(index)}>
              <RemoveCircleOutlineIcon color='error' />
            </IconButton>
          </Stack>
        ))}
        <Stack spacing={1}>
          <Button variant='outlined' onClick={addModification}>
            Добавить модификацию
          </Button>
          <Button variant='contained' type='submit'>
            Сохранить
          </Button>
        </Stack>
      </Wrapper>
    </FormProvider>
  )
}
