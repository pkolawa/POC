import React from "react";
import { Helmet } from "react-helmet";
import RuntimeManagementContainer from "../../containers/RuntimeManagementContainer";

class Runtime extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Helmet>
          <title>Runtime Management</title>
          <meta
            name="description"
            content="Runtime Management"
          />
        </Helmet>
        <RuntimeManagementContainer />
      </>
    );
  }
}

export default Runtime;
