import React from "react";
import Typography from "@material-ui/core/Typography";

class NotFoundPage extends React.Component {
  render() {
    return (
      <div>
        <Typography align="center" variant="h2" color="danger">
          404 Page Not Found
        </Typography>
      </div>
    );
  }
}

export { NotFoundPage as default }