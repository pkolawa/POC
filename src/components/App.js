import React from "react";
import { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppRouter from "../routes/AppRouter";

function App() {
  return (
      <Fragment>
        <CssBaseline />
        <AppRouter />
      </Fragment>
  );
}

export default App;
