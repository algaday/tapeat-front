import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { userApi } from '../api/userApi'

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
}

type UserState = {
  user: User | null
}

const initialState: UserState = {
  user: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      userApi.endpoints.login.matchFulfilled,
      (state, action: PayloadAction<User>) => {
        // Update state with the response data
        state.user = action.payload
      }
    )
  },
})

// Action creators are generated for each case reducer function
export const {} = userSlice.actions

export default userSlice.reducer
