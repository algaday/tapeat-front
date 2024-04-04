'use client'

import { CssBaseline, ThemeProvider } from '@mui/material'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import theme from './theme'
import { AppStore, makeStore } from '../model/store'
import { useRef } from 'react'
import { Provider } from 'react-redux'

const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient()
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  }
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={storeRef.current}>{children}</Provider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default ReactQueryProvider
