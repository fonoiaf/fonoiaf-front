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
    primary: {
        // lighter: '#C8FAD6',
        A100: '#C8FAD6',
        light: '#5BE49B',
        main: '#00A76F',
        dark: '#007867',
        // darker: '#004B50',
        A700: '#004B50',
        contrastText: '#FFFFFF',
    }
}

const componentsLight: Components = {
    MuiDataGrid: {
        styleOverrides: {
            root: {
                borderRadius: '8px'
            },
        }
    },
    MuiImageListItem: {
        styleOverrides: {
            img: {
                borderRadius: '8px'
            }
        }
    },
    MuiListItemButton: {
        styleOverrides: {
            root: {
                color: 'text.primary'
            }
        }
    }
}

const paletteDark: PaletteOptions = {
    mode: 'dark',
}

const lightTheme = createTheme({
    palette: paletteLight,
    components: componentsLight,
    shape: {
        borderRadius: 8
    }
})
const darkTheme = createTheme({
    palette: paletteDark,
    shape: {
        borderRadius: 8
    }
})


const themes = {
    light: createTheme({ ...lightTheme }),
    dark: createTheme({ ...darkTheme }),
}

export default themes
