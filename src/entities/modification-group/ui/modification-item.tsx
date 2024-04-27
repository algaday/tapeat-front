import { Box, Button, Card, CardActions, Typography } from '@mui/material'
import { Modification } from './types'
import {
  StyledActionBox,
  StyledCard,
  StyledCardContent,
} from '@/shared/ui/modification-card/modification-card.styles'

export function ModificationItem(props: Modification) {
  console.log(props)

  return (
    <StyledCard>
      <Box padding={0}>
        <StyledCardContent>
          <Typography variant='h5'>{props.name}</Typography>
        </StyledCardContent>
      </Box>
      <StyledActionBox>
        <CardActions>
          <Button variant='outlined' disabled>
            {props.price} тг
          </Button>
        </CardActions>
      </StyledActionBox>
    </StyledCard>
  )
}
