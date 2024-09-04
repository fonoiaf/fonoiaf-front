import '@/assets/styles/globals.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import Theme from '@/components/Theme'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Fono IAF',
    description: 'Fonoiaf software',
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
}

interface Props {
    children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
    return (
        <html lang="pt-br">
            <body className={inter.className} style={{backgroundColor: '#eef2f6'}}>
                <Theme>{children}</Theme>
            </body>
        </html>
    )
}
