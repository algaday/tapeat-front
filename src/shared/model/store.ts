import { configureStore } from '@reduxjs/toolkit'
import userReducer from '@/entities/user/model/slice'
import { userApi } from '@/entities/user/api/userApi'

const persistConfig = {
  key: 'root',
  version: 1,
}

export const makeStore = () => {
  return configureStore({
    reducer: {
      userInfo: userReducer,
      [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(userApi.middleware),
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
