'use client'

import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './context'

interface Props {
    children: React.ReactNode
}

export default function Theme({ children }: Props) {
    const currentTheme = theme.light

    return (
        <ThemeProvider theme={currentTheme}>
            {/* <GlobalStyles styles={globalStyles} /> */}
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
