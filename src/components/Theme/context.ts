import { createTheme, PaletteOptions } from '@mui/material/styles'

const paletteLight: PaletteOptions = {
    mode: 'light',
    background: {
        // default: '#f0f0f0',
        default: '#eef2f6',
        paper: '#fff',
    },
}

const paletteDark: PaletteOptions = {
    mode: 'dark',
}

const lightTheme = createTheme({ palette: paletteLight })
const darkTheme = createTheme({ palette: paletteDark })


const themes = {
    light: createTheme({ ...lightTheme }),
    dark: createTheme({ ...darkTheme }),
}

export default themes
