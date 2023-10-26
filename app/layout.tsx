import '@/assets/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

interface Props {
  children: React.ReactNode
}

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Fono IAF | Dashboard',
  description: 'Fonoiaf software',
}

export default function RootLayout({
  children,
}: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
