import React from "react";
import Typography from "@material-ui/core/Typography";

class Runtime extends React.Component {
  render() {
    return (
      <div>
        <Typography align="center" variant="h2" color="secondary">
        Runtime Page
        </Typography>
      </div>
    );
  }
}

export { Runtime as default }