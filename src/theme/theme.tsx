import { createTheme, colors } from '@mui/material';

// A custom theme for this app
// @ts-ignore
const theme = createTheme({
    palette: {
        primary: {
            main: '#1d2c59',
        },
        secondary: {
            main: '#a2deeb',
            dark: '#4679a6',
        },
        error: {
            main: colors.red.A400,
        },
        success: {
        },
        background: {
            default: '#fff',
        },
    },
});

export default theme;