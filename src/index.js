import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./utils/store";
import App from "./components/App";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";

const store = configureStore();

render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById("root")
);