'use client'
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form'
import {
  useGetSingleMenuItemQuery,
  useUpdateMenuItemMutation,
} from './api/single-menu-item-api'
import { useParams, useRouter } from 'next/navigation'
import { Button, InputAdornment, Typography } from '@mui/material'
import { useEffect } from 'react'
import { StyledForm } from './menu-item-overview.styless'
import { RHFInputField } from '@/shared/ui/rhf/rhf-input-field'
import { ModifiedImage } from '@/shared/ui/image/image'
import { Image } from '@/shared/api/image/types'
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

  const router = useRouter()

  const methods = useForm<UpdateMenuItemDto>({
    resolver: zodResolver(updateMenuItemSchema),
  })

  useEffect(() => {
    if (!isLoading && !error && menuItem) {
      methods.setValue('menuItemId', menuItem.id)
      methods.setValue('name', menuItem.nameOfDish)
      methods.setValue('category', menuItem.category)
      methods.setValue('description', menuItem.description)
      methods.setValue('price', menuItem.price)
      methods.setValue('imageId', menuItem.image.imageId)
    }
  }, [menuItem, error, isLoading, methods])

  const onSubmit: SubmitHandler<UpdateMenuItemDto> = async (data) => {
    await updateMenuItems(data).unwrap()
    router.push('/dashboard/menu')
  }

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={methods.handleSubmit(onSubmit)}>
        <Typography variant='h6' component='h2'>
          update menu item
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

        <Button variant='contained' type='submit'>
          Создать
        </Button>
      </StyledForm>
    </FormProvider>
  )
}
