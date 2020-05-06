import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/styles";
import { Route, Switch } from "react-router-dom";
import Header from "../Header";
import MainMenu from "../Menu";
import Monitor from "../../pages/Monitor";
import Runtime from "../../pages/Runtime";
import Dashboard from "../../pages/Dashboard";
import Configuration from "../../pages/Configuration";
import NotFoundPage from "../../pages/404.js";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    maxWidth: "100vw",
    overflowX: "hidden",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    width: `calc(100vw - 240px)`,
    minHeight: "100vh",
  },
  fakeToolbar: {
    ...theme.mixins.toolbar,
  },
}));

function Layout(props) {
  var classes = useStyles();

  return (
    <div className={classes.root}>
      <>
        <Header />
        <MainMenu />
        <div className={classes.content}>
          <div className={classes.fakeToolbar} />
          <Switch>
            <Route path="/app/dashboard" component={Dashboard} />
            <Route path="/app/configuration" component={Configuration} />
            <Route path="/app/runtime" component={Runtime} />
            <Route path="/app/monitor" component={Monitor} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </>
    </div>
  );
}

export default Layout;
