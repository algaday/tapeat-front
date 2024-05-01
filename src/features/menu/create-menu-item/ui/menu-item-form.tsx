'use client'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import {
  Button,
  CircularProgress,
  InputAdornment,
  Typography,
} from '@mui/material'
import { RHFInputField } from '@/shared/ui/rhf/rhf-input-field'
import { useRouter } from 'next/navigation'
import { Wrapper } from './menu-item-form.styles'
import { RHFImageUpload } from '@/shared/ui/rhf/rhf-image-upload'
import {
  CreateMenuItemSchema,
  createMenuItemSchema,
} from '../model/create-menu-item-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCreateMenuItemMutation } from '../api/create-menu-item-api'
import { useGetAllModificationGroupsQuery } from '@/entities/modification-group/api/modification-group-api'
import { RHFSelect } from '@/shared/ui/rhf/rhf-select'

export function MenuItemForm() {
  const [createMenuItem] = useCreateMenuItemMutation()

  const {
    data: modificationGroups,
    isLoading,
    isSuccess,
  } = useGetAllModificationGroupsQuery()

  const router = useRouter()

  const methods = useForm<CreateMenuItemSchema>({
    defaultValues: {
      modificationGroupIds: [],
    },
    resolver: zodResolver(createMenuItemSchema),
  })

  const onSubmit: SubmitHandler<CreateMenuItemSchema> = async (data) => {
    await createMenuItem({
      ...data,
    }).unwrap()

    router.push('/dashboard/menu')
  }

  const modifiedModificationGroups = modificationGroups?.map(
    (modificationGroup) => ({
      id: modificationGroup.id,
      name: modificationGroup.name,
    })
  )

  if (isLoading) {
    return <CircularProgress />
  }

  if (isSuccess && modifiedModificationGroups) {
    return (
      <FormProvider {...methods}>
        <Wrapper onSubmit={methods.handleSubmit(onSubmit)}>
          <Typography variant='h6' component='h2'>
            Создать блюдо для ресторана
          </Typography>
          <RHFInputField
            name='name'
            id='name'
            label='Название'
            margin='normal'
          />
          <RHFInputField
            name='category'
            id='category'
            label='Категория'
            margin='normal'
          />
          <RHFInputField
            name='description'
            id='description'
            label='Описание блюда'
            margin='normal'
          />
          <RHFInputField
            type='number'
            name='price'
            id='price'
            label='Цена'
            margin='normal'
            InputProps={{
              inputProps: { min: 0, max: 100000 },
              endAdornment: (
                <InputAdornment position='start'>тг</InputAdornment>
              ),
            }}
          />

          <RHFSelect
            name='modificationGroupIds'
            modificationGroups={modificationGroups}
          />

          <RHFImageUpload name='imageId' />
          <Button variant='contained' type='submit'>
            Создать
          </Button>
        </Wrapper>
      </FormProvider>
    )
  }
}
