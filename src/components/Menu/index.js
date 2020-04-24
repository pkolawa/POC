import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import SettingsIcon from "@material-ui/icons/Settings";
import TimelineIcon from "@material-ui/icons/Timeline";
import AutorenewIcon from "@material-ui/icons/Autorenew";
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
          paddingLeft: theme.spacing(1)
      }
    },
  },
  drawerPaper: {
    width: drawerWidth,
    top: "64px"
  },
}));

export default function Menu() {
  const classes = useStyles();

  const drawer = (
    <div>
      <List>
        {["Configuration", "Monitor", "Runtime"].map((text, index) => (
          <ListItem button key={text}>
            <Link to={`/${text.toLowerCase()}`}>
              {text === "Configuration" && <SettingsIcon color="primary" />}
              {text === "Monitor" && <TimelineIcon color="primary" />}
              {text === "Runtime" && <AutorenewIcon color="primary" />}
              <Typography align="center" color="primary">
                {text}
              </Typography>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
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
  );
}
