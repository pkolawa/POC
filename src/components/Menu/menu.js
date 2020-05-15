import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import SettingsIcon from "@material-ui/icons/Settings";
import TimelineIcon from "@material-ui/icons/Timeline";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    flexBasis: drawerWidth,
    "& a": {
      textDecoration: "none",
      display: "inline-flex",
      paddingTop: theme.spacing(1.5),
      paddingBottom: theme.spacing(1.5),
      "& p": {
        display: "inline-block",
        paddingLeft: theme.spacing(1),
      },
    },
  },
  drawerPaper: {
    width: drawerWidth,
    top: "64px",
  },
}));

export default function Menu() {
  const classes = useStyles();

  const drawer = (
    <div>
      <List>
        {["Dashboard", "Configuration", "Monitor", "Runtime"].map(
          (text, index) => (
            <ListItem button key={text}>
              <Link to={`/app/${text.toLowerCase()}`}>
                {text === "Dashboard" && <HomeIcon color="primary" />}
                {text === "Configuration" && <SettingsIcon color="primary" />}
                {text === "Monitor" && <TimelineIcon color="primary" />}
                {text === "Runtime" && <AutorenewIcon color="primary" />}
                <Typography align="center" color="primary">
                  {text}
                </Typography>
              </Link>
            </ListItem>
          )
        )}
      </List>
    </div>
  );

  return (
    <Hidden only={["xs"]}>
      <div className={classes.root}>
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </div>
    </Hidden>
  );
}
