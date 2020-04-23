import React from "react";
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import AppRouter from "../routes/AppRouter";

let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#932020',
      main: '#d32f2f',
      dark: '#db5858',
      contrastText: '#fff',
    },
    secondary: {
      light: '#121858',
      main: '#ef5350',
      dark: '#474f97',
      contrastText: '#000',
    },
  },
});
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
