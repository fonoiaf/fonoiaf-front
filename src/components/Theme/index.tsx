'use client'

import themeLayut from '@/components/Layout/theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './context'

interface Props {
    children: React.ReactNode
}

export default function Theme({ children }: Props) {
    const currentTheme = theme.light
    const currentTheme2 = themeLayut

    return (
        <ThemeProvider theme={currentTheme}>
            {/* <GlobalStyles styles={globalStyles} /> */}
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
