import { createTheme, colors } from '@mui/material';

// A custom theme for this app
// @ts-ignore
const theme = createTheme({
    palette: {
        primary: {
            main: '#fff',
        },
        secondary: {
            main: '#fafafa',
            dark: '#7e7d7d',
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