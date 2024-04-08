import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { userApi } from '../../../shared/api/user/userApi'

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
  reducers: {
    clearUser: (state) => {
      state.user = null
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      userApi.endpoints.login.matchFulfilled,
      (state, action: PayloadAction<User>) => {
        state.user = action.payload
      }
    )
  },
})

// Action creators are generated for each case reducer function
export const { clearUser } = userSlice.actions

export default userSlice.reducer
