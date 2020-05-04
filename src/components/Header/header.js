import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  HomeButton: {
    marginRight: theme.spacing(2),
  },
}));

function Header(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.HomeButton}
            color="inherit"
            aria-label="Home"
            onClick={() => (props.history.push('/'))}
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            HTTP APP Console
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export {Header}

export default withRouter(Header);