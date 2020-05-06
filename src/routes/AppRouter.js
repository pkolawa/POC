import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import LoginPage from "../pages/Login";
import Layout from "../components/Layout";
import NotFoundPage from "../pages/404.js";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const AppRouter = (props) => {
  return (
    <BrowserRouter>
      <>
        <Helmet
          titleTemplate="%s - HTTP APP Console"
          defaultTitle="HTTP APP Console"
        >
          <meta name="description" content="HTTP APP Console" />
        </Helmet>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/app/dashboard" />}
          />
          <Route
            exact
            path="/app"
            render={() => <Redirect to="/app/dashboard" />}
          />
          <PrivateRoutes path="/app" component={Layout} />
          <PublicRoutes path="/login" component={LoginPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </>
    </BrowserRouter>
  );
};
export { AppRouter as default };
