import React from "react";
import Typography from "@material-ui/core/Typography";

class Login extends React.Component {
  render() {
    return (
      <div>
        <Typography align="center" variant="h2" color="secondary">
          Login Page
        </Typography>
      </div>
    );
  }
}

export { Login as default }