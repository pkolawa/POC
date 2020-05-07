import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  IconButton,
  Typography,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Person from "@material-ui/icons/Person";
import { connect } from "react-redux";
import { logout } from "../../redux/actions/auth";

const useStyles = makeStyles((theme) => ({
  root: {},
  grow: {
    flexGrow: 1,
  },
  HomeButton: {
    marginRight: theme.spacing(2),
  },
  headerMenu: {
    marginTop: theme.spacing(6),
  },
  headerMenuItem: {
    "&:hover, &:focus": {
      backgroundColor: theme.palette.primary.main,
      color: "white",
    },
  },
  profileMenu: {
    minWidth: 265,
  },
  profileMenuUser: {
    padding: theme.spacing(2),
    outline: "none",
  },
  profileMenuIcon: {
    marginRight: theme.spacing(2),
  },
}));

function Header(props) {
  const classes = useStyles();
  const [profileMenu, setProfileMenu] = useState(null);
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.HomeButton}
            color="inherit"
            aria-label="Home"
            onClick={() => props.history.push("/")}
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            HTTP APP Console
          </Typography>
          <div className={classes.grow} />
          <IconButton
            color="inherit"
            aria-label="Logout"
            title="Logout"
            onClick={(e) => {
              props.logout();
              props.history.push("/");
            }}
          >
            <PowerSettingsNewIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="User Menu"
            title="User Menu"
            onClick={(e) => setProfileMenu(e.currentTarget)}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="profile-menu"
            open={Boolean(profileMenu)}
            anchorEl={profileMenu}
            className={classes.headerMenu}
            classes={{ paper: classes.profileMenu }}
            onClose={() => setProfileMenu(null)}
          >
            <div className={classes.profileMenuUser}>
              <Typography variant="h4" color="secondary" weight="medium">
                Hi Welcome
              </Typography>
            </div>
            <MenuItem className={classes.headerMenuItem}>
              <Person className={classes.profileMenuIcon} /> Profile
            </MenuItem>
            <MenuItem className={classes.headerMenuItem}>
              <Person className={classes.profileMenuIcon} /> Settings
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    logout: (key) => dispatch(logout()),
  };
};
export default connect(undefined, mapDispatchToProps)(withRouter(Header));
