import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import SettingsIcon from "@material-ui/icons/Settings";
import TimelineIcon from "@material-ui/icons/Timeline";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import { Link } from "react-router-dom";

const styles = (theme) => ({
  root: {
    marginTop: "30px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(24),
      height: theme.spacing(24),
    },
    "& a": {
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      height: "inherit",
      width: "inherit",
      justifyContent: "center",
      flexDirection: "column",
      "& p": {
        fontWeight: "500"
      }
    },
  },
});

class Dashboard extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Container>
          <div className={classes.root}>
            <Paper elevation={3}>
              <Link to="/app/configuration">
                <SettingsIcon color="primary" />
                <Typography align="center" color="primary">
                  Configuration Management
                </Typography>
              </Link>
            </Paper>
            <Paper elevation={3}>
              <Link to="/app/monitor">
                <TimelineIcon color="primary" />
                <Typography align="center" color="primary">
                  Monitor Page
                </Typography>
              </Link>
            </Paper>
            <Paper elevation={3}>
              <Link to="/app/runtime">
                <AutorenewIcon color="primary" />
                <Typography align="center" color="primary">
                  Runtime Management
                </Typography>
              </Link>
            </Paper>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export {Dashboard}

export default withStyles(styles)(Dashboard);
