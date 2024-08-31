'use client'

import { CssBaseline } from '@mui/material'
import { createContext } from 'react'

interface ThemeProviderProps {
    children: React.ReactNode
}

export const ThemeContext = createContext({})
export default function ThemeProvider({ children }: ThemeProviderProps) {
    return (
        <ThemeContext.Provider value="dark">
            {/* <GlobalStyles styles={globalStyles} /> */}
            <CssBaseline />
            {children}
        </ThemeContext.Provider>
    )
}
