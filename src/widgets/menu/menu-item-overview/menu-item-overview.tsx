'use client'
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form'
import {
  useDeletMenuItemMutation,
  useGetSingleMenuItemQuery,
  useUpdateMenuItemMutation,
} from './api/single-menu-item-api'
import { useParams, useRouter } from 'next/navigation'
import { Button, InputAdornment, Stack, Typography } from '@mui/material'
import { useEffect } from 'react'
import { StyledForm } from './menu-item-overview.styless'
import { RHFInputField } from '@/shared/ui/rhf/rhf-input-field'

import { RHFImageUpdate } from '@/shared/ui/rhf/rhf-image-update'
import { zodResolver } from '@hookform/resolvers/zod'
import { UpdateMenuItemDto, updateMenuItemSchema } from './api/types'

export function MenuItemOverviewWidget() {
  const params = useParams<{ menuItemId: string }>()

  const {
    data: menuItem,
    isLoading,
    error,
  } = useGetSingleMenuItemQuery(params?.menuItemId)

  const [updateMenuItems] = useUpdateMenuItemMutation()

  const [deletMenuItem] = useDeletMenuItemMutation()

  const router = useRouter()

  const methods = useForm<UpdateMenuItemDto>({
    resolver: zodResolver(updateMenuItemSchema),
  })

  useEffect(() => {
    if (!isLoading && !error && menuItem) {
      methods.setValue('menuItemId', menuItem.id, { shouldValidate: true })
      methods.setValue('name', menuItem.nameOfDish, { shouldValidate: true })
      methods.setValue('category', menuItem.category, { shouldValidate: true })
      methods.setValue('description', menuItem.description, {
        shouldValidate: true,
      })
      methods.setValue('price', menuItem.price, { shouldValidate: true })
      methods.setValue('imageId', menuItem.image.imageId, {
        shouldValidate: true,
      })
    }
  }, [menuItem, error, isLoading, methods])

  const onSubmit: SubmitHandler<UpdateMenuItemDto> = async (data) => {
    await updateMenuItems(data).unwrap()

    router.push('/dashboard/menu')
  }

  const handleDelete = async () => {
    await deletMenuItem({ menuItemId: menuItem.id })
    router.push('/dashboard/menu')
  }

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={methods.handleSubmit(onSubmit)}>
        <Typography variant='h6' component='h2'>
          Редактировать
        </Typography>
        <RHFInputField name='name' id='name' label='Название' margin='normal' />
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
            endAdornment: <InputAdornment position='start'>тг</InputAdornment>,
          }}
        />
        <RHFImageUpdate image={menuItem?.image} name='imageId' />
        <Stack direction='column' spacing={2} marginTop={2}>
          <Button variant='contained' type='submit'>
            Изменить
          </Button>
          <Button
            variant='outlined'
            type='button'
            color='error'
            onClick={() => handleDelete()}
          >
            Удалить
          </Button>
        </Stack>
      </StyledForm>
    </FormProvider>
  )
}
