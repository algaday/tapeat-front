import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ReactQueryProvider from '@/shared/api/react-query-provider'

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
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  )
}
