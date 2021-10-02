import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff',
            light: '#ffffff',
            dark: '#cccccc',
            contrastText: '#333333'
        },
        secondary: {
            main: '#3cd17f',
            light: '#78ffaf',
            dark: '#009f52',
            contrastText: '#000000'
        }
    },
    mixins: {
        toolbar: {
            height: '64px'
        }
    }
});

export default responsiveFontSizes(theme);