import React from "react";
import { Provider } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppRouter from "../routes/AppRouter";
import configureStore from "../redux/configureStore";

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <CssBaseline />
      <AppRouter />
    </Provider>
  );
}

export default App;
