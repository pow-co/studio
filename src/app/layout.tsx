import { RelayProvider } from '@/context/RelayContext'
import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PowCo Studio',
  description: 'Creator Studio for Powerful NFTs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script
        src="https://one.relayx.io/relayone.js"
      />
      <body className={inter.className}>
        <RelayProvider>
          {children}
        </RelayProvider>
      </body>
    </html>
  )
}
