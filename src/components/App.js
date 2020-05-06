import React from "react";
import {
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppRouter from "../routes/AppRouter";
import Themes from "../themes";

let theme;
theme = responsiveFontSizes(Themes.default);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
