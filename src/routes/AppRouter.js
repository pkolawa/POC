import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import Configuration from "../pages/Configuration";
import Monitor from "../pages/Monitor";
import Runtime from "../pages/Runtime";
import Dashboard from "../pages/Dashboard";
import LoginPage from "../pages/Login";
import NotFoundPage from "../pages/404.js";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const AppRouter = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Helmet
          titleTemplate="%s - HTTP APP Console"
          defaultTitle="HTTP APP Console"
        >
          <meta name="description" content="HTTP APP Console" />
        </Helmet>
        <Switch>
          <PublicRoutes path="/" component={LoginPage} exact={true} />
          <PrivateRoutes path="/dashboard" component={Dashboard} exact={true} />
          <PrivateRoutes
            path="/configuration"
            component={Configuration}
            exact={true}
          />
          <PrivateRoutes path="/monitor" component={Monitor} exact={true} />
          <PrivateRoutes path="/runtime" component={Runtime} exact={true} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export { AppRouter as default };
