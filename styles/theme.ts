import { createTheme } from "@mui/material";

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
      },
      // divider: '#BDBDBD'
    }
  });

export default theme;