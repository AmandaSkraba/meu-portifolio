import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            main: "#463FE1",
        },
        secondary: {
            main: "#463FE1",
        },
    },
    typography: {
        fontFamily: "Poppins"
    }
});

theme = responsiveFontSizes(theme);

export default theme;