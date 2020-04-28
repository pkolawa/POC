import React from "react";
import Typography from "@material-ui/core/Typography";

class Title extends React.Component {
  render() {
    return (
      <Typography
        align="center"
        variant="h2"
        color={this.props.color ? this.props.color : "secondary"}
      >
        {this.props.title}
      </Typography>
    );
  }
}

export default Title;
