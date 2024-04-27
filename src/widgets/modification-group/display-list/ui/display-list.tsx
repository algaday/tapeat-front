import { ModificationGroupList } from '@/features/menu/get-all-modification-group/ui/get-all-modification-group'
import AddIcon from '@mui/icons-material/Add'
import { Button } from '@mui/material'
import Link from 'next/link'

export function ModificationGroupListWidget() {
  return (
    <>
      <Button
        variant='outlined'
        startIcon={<AddIcon />}
        href='/dashboard/menu/modification-group/create'
        LinkComponent={Link}
      >
        ДОБАВИТЬ ГРУППУ МОДИФИКАЦИИ
      </Button>
      <ModificationGroupList />
    </>
  )
}
