import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";

const styles = (theme) => ({
  root: {
    marginTop: '30px',
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
    "& a": {
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      height: "inherit",
      width: "inherit",
      justifyContent: "center"
    }
  },
});

class Dashboard extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Container maxWidth="sm">
          <div className={classes.root}>
            <Paper elevation={3}>
              <Link to="/configuration">
                <Typography align="center" color="primary">
                  Configuration Page
                </Typography>
              </Link>
            </Paper>
            <Paper elevation={3}>
              <Link to="/monitor">
                <Typography align="center" color="primary">
                  Monitor Page
                </Typography>
              </Link>
            </Paper>
            <Paper elevation={3}>
              <Link to="/runtime">
                <Typography align="center" color="primary">
                  Runtime Page
                </Typography>
              </Link>
            </Paper>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Dashboard);
