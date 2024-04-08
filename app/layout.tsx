import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
import CutomThemeProvider from '@/app/providers/custom-theme-provider'

const ReduxProvider = dynamic(() => import('@/app/providers/reduxProvider'), {
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
          <CutomThemeProvider>{children}</CutomThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
