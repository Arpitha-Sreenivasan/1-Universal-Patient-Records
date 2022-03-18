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
        myBlue: {
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
        myRed: {
            main: '#ff1f3d'
        },
        myYellow: {
            main: '#F5D60C'
        },
        myOrange: {
            main: '#f0ab56'
        },
        myPurple: {
            main: '#5603AD'
        },
        myGreen: {
            main: '#aaea85'
        },
        myTeal: {
            main: '#76E8D5'
        }
    }
});

export default theme;