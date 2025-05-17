'use client';
import { grey, indigo } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: grey[900],
                },
                secondary: {
                    main: indigo[500],
                },
            },
        },
        dark: {
            palette: {
                primary: {
                    main: grey[400],
                },
                secondary: {
                    main: indigo[200],
                },
            },
        },
    },
    typography: {
        fontFamily: 'var(--font-inter)',
    },
    cssVariables: true,
});

theme = responsiveFontSizes(theme);
export default theme;