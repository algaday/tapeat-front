import { useGetBranchesQuery } from '@/entities/restaurant-branch/api'
import { BranchCard } from '@/entities/restaurant-branch/ui/card/card'
import AddIcon from '@mui/icons-material/Add'
import { Button } from '@mui/material'
import Link from 'next/link'

export function RestaurantBranchWidget() {
  const { data: branches } = useGetBranchesQuery()

  return (
    <>
      <Button
        variant='outlined'
        startIcon={<AddIcon />}
        href='/dashboard/branches/create-branch'
        LinkComponent={Link}
      >
        СОЗДАТЬ ФИЛИАЛ
      </Button>
      <BranchCard branches={branches} />
    </>
  )
}
