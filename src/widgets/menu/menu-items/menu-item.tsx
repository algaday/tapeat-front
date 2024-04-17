import { Box, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import Link from 'next/link'
import { MenuItemCard } from '@/entities/menu-item/ui/menu-item-card'
import { useGetAllMenuItemsQuery } from './api/menu-item-api'

export function MenuItemWidget() {
  const { data: menuItems } = useGetAllMenuItemsQuery()

  return (
    <>
      <Button
        variant='outlined'
        startIcon={<AddIcon />}
        href='/dashboard/menu/create-menu'
        LinkComponent={Link}
      >
        ДОБАВИТЬ БЛЮДО
      </Button>
      <Box marginTop={4}>
        {menuItems?.map((menuItem) => (
          <MenuItemCard key={menuItem.id} {...menuItem}></MenuItemCard>
        ))}
      </Box>
    </>
  )
}
