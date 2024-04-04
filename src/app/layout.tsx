import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/shared/ui/navbar/navbar'
import dynamic from 'next/dynamic'
import CutomThemeProvider from '@/shared/api/custom-theme-provider'

const ReduxProvider = dynamic(() => import('@/shared/api/reduxProvider'), {
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
        <Navbar />

        <ReduxProvider>
          <CutomThemeProvider>{children}</CutomThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
