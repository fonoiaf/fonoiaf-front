import { Components, createTheme, PaletteOptions } from '@mui/material/styles';
import type { } from '@mui/x-data-grid/themeAugmentation';

const paletteLight: PaletteOptions = {
    mode: 'light',
    background: {
        // default: '#f0f0f0',
        // default: '#eef2f6',
        default: '#fff',
        paper: '#fff',
    },
}

const componentsLight: Components = {
    MuiDataGrid: {
        styleOverrides: {
            root: {
                borderRadius: '8px'
            }
        }
    }
} 

const paletteDark: PaletteOptions = {
    mode: 'dark',
}

const lightTheme = createTheme({ palette: paletteLight, components: componentsLight })
const darkTheme = createTheme({ palette: paletteDark })


const themes = {
    light: createTheme({ ...lightTheme }),
    dark: createTheme({ ...darkTheme }),
}

export default themes
