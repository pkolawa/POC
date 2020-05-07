import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  title: {
    marginBottom: theme.spacing(2),
    fontSize: "2rem",
  }
});

class Title extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Typography
        variant="h2"
        color={this.props.color ? this.props.color : "secondary"}
        className={classes.title}
        weight="High"
      >
        {this.props.title}
      </Typography>
    );
  }
}

export default withStyles(styles)(Title);
