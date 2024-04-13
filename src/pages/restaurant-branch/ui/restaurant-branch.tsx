import { Wrapper } from './restaurant-branch.styles'
import { useGetBranchesQuery } from '@/entities/restaurant-branch/api'
import { RestaurantBranchWidget } from '@/widgets/restaurant-branch'

export function RestaurantBranchPage() {
  return (
    <Wrapper>
      <RestaurantBranchWidget />
    </Wrapper>
  )
}
