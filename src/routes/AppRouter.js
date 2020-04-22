import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Dashboard from "../components/Dashboard";
import Configuration from "../components/Configuration";
import LoginPage from "../components/Login";
import Monitor from "../components/Monitor";
import Runtime from "../components/Runtime";
import NotFoundPage from "../components/404.js";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const AppRouter = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Helmet>
          <title>HTTP APP Console</title>
          <meta name="description" content="HTTP APP Console" />
        </Helmet>
        <Switch>
          <PublicRoutes path="/" component={LoginPage} exact={true} />
          <PrivateRoutes path="/dashboard" component={Dashboard} exact={true} />
          <PrivateRoutes path="/configuration" component={Configuration} exact={true} />
          <PrivateRoutes path="/monitor" component={Monitor} exact={true} />
          <PrivateRoutes path="/runtime" component={Runtime} exact={true} />
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export { AppRouter as default };
