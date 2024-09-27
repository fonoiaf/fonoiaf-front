import '@/assets/styles/globals.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
//https://www.npmjs.com/package/@fontsource/playpen-sans
import '@fontsource/playpen-sans/300.css'
import '@fontsource/playpen-sans/400.css'
import '@fontsource/playpen-sans/500.css'
import '@fontsource/playpen-sans/700.css'

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
            <body className={inter.className}>
                <Theme>{children}</Theme>
            </body>
        </html>
    )
}
