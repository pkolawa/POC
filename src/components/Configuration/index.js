import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Menu from "../Menu";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  container: {
    flexBasis: `calc(100% - 240px)`,
  },
});

class Configuration extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Menu />
        <Container className={classes.container}>
          <Typography align="center" variant="h2" color="secondary">
            Configuration Page
          </Typography>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(Configuration);
