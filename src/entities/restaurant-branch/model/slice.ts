import { createSlice } from '@reduxjs/toolkit'
import { RestaurantBranch, restaurantBranchApi } from '../api'

type RestaurantBranchState = {
  branches: RestaurantBranch[] | []
}
const initialState: RestaurantBranchState = {
  branches: [],
}

export const restaurantBranchSlice = createSlice({
  name: 'restaurantBranch',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      restaurantBranchApi.endpoints.getBranches.matchFulfilled,
      (state, action) => {
        state.branches = action.payload
      }
    )
  },
})

export default restaurantBranchSlice.reducer
