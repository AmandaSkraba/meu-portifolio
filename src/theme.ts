import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            main: "#463FE1",
        },
        secondary: {
            main: "#0C0F10",
        },
    },
    typography: {
        fontFamily: "Poppins",
        h1:{
            fontSize:'60px',
            textTransform: "uppercase",
            fontWeight:'50'
        },
        h6:{
            textTransform: "uppercase",
            fontWeight:'400'
        }
    },
});

theme = responsiveFontSizes(theme);

export default theme;