import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = (theme) => ({
  countColor: {
    color: "blue",
  },
});

export class Card extends React.Component {
  render() {
    const {
      classes,
      region = {},
    } = this.props;
    const { loc="Anonymous", totalConfirmed = "Data Not Found" } = region;
    return (
      <Paper elevation={3}>
        <Typography align="center" color="primary">
          {loc}
        </Typography>
        {this.props.loading && <CircularProgress color="secondary" />}
        <Typography align="center" className={classes.countColor}>
          {totalConfirmed}
        </Typography>
      </Paper>
    );
  }
}

export default withStyles(styles)(Card);
