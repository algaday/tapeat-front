import { Wrapper } from './restaurant-branch.styles'
import { useGetBranchesQuery } from '@/entities/restaurant-branch/api'
import { RestaurantBranchWidget } from '@/widgets/restaurant-branch'

export function RestaurantBranchPage() {
  const { data } = useGetBranchesQuery()
  console.log(data)

  return (
    <Wrapper>
      <RestaurantBranchWidget />
    </Wrapper>
  )
}
