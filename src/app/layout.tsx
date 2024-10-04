//https://www.npmjs.com/package/@fontsource/playpen-sans
import '@fontsource/playpen-sans/300.css'
import '@fontsource/playpen-sans/400.css'
import '@fontsource/playpen-sans/500.css'
import '@fontsource/playpen-sans/700.css'

import Theme from '@/components/Theme'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import type { Metadata, Viewport } from 'next'
import { Playpen_Sans } from 'next/font/google'

const playpenSans = Playpen_Sans({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-playpen-sans',
})

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
            <body className={playpenSans.variable}>
                <AppRouterCacheProvider>
                    <Theme>{children}</Theme>
                </AppRouterCacheProvider>
            </body>
        </html>
    )
}
