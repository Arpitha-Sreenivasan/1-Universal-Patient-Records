import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: [
            'Poppins',
            '"Source Sans Pro"',
            'Helvetica',
            'Spectral',
        ].join(','),
    },
    palette: {
        primary: {
            main: '#77bee8'
        },
        blueAccent: {
            main: '#d6ebf8'
        },
        myDark: {
            main: '#263238'
        },
        myDarkest: {
            main: '#0d1317'
        },
        myPink: {
            main: '#fb0066'
        },
        error: {
            main: '#ff1f3d'
        },
        warning: {
            main: '#F5D60C'
        },
        myOrange: {
            main: '#f0ab56'
        },
        secondary: {
            main: '#5603AD'
        },
        success: {
            main: '#60cb23'
            // main: '#aaea85',
        },
        myTeal: {
            main: '#76E8D5'
        }
    }
});

export default theme;