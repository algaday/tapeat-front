import { Box, Button, CardActions, Chip, Typography } from '@mui/material'
import {
  StyledActionBox,
  StyledCard,
  StyledCardContent,
} from './modification-card.styles'
import Link from 'next/link'

type Props = {
  id: string
  modificationGroupId: string
  name: string
  price: string
  createdAt: string
  updatedAt: string
} & { modificationCount: string }

export function ModificationCard(props: Props) {
  return (
    <StyledCard>
      <Box padding={0}>
        <StyledCardContent>
          <Typography variant='h5'>{props.name}</Typography>
        </StyledCardContent>
      </Box>
      <StyledActionBox>
        <Chip label={props.modificationCount} variant='outlined' />
        <CardActions>
          <Button
            variant='outlined'
            href={`/dashboard/menu/modification-group/${props.id}`}
            LinkComponent={Link}
          >
            Подробнее
          </Button>
        </CardActions>
      </StyledActionBox>
    </StyledCard>
  )
}
