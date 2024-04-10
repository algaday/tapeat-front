import { Button, Link as MuiLink } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { StyledLink } from './restaurant-branch.styles'

export function RestaurantBranchPage() {
  return (
    <main>
      <Button variant='outlined' startIcon={<AddIcon />}>
        <StyledLink href='/dashboard/branches/create-branch' passHref>
          <MuiLink variant='body2'>СОЗДАТЬ ФИЛИАЛ</MuiLink>
        </StyledLink>
      </Button>
    </main>
  )
}
