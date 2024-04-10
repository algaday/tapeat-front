import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
import CustomThemeProvider from '@/app/providers/custom-theme-provider'
import ToastProvider from '@/app/providers/toast-provider'

const ReduxProvider = dynamic(() => import('@/app/providers/redux-provider'), {
  ssr: false,
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tapeat App',
  description: 'Online order app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ReduxProvider>
          <CustomThemeProvider>
            <ToastProvider>{children}</ToastProvider>
          </CustomThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
